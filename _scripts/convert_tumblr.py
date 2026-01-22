#!/usr/bin/env python3
"""Convert Tumblr HTML export to Jekyll markdown posts."""

import os
import re
from datetime import datetime
from pathlib import Path
from html.parser import HTMLParser
import shutil

TUMBLR_DIR = Path.home() / "Downloads/tumblr_export"
POSTS_DIR = TUMBLR_DIR / "posts/html"
MEDIA_DIR = TUMBLR_DIR / "media"
OUTPUT_DIR = Path(__file__).parent.parent / "_posts"
ASSETS_DIR = Path(__file__).parent.parent / "assets/img/blog"


class TumblrPostParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.content = []
        self.timestamp = ""
        self.images = []
        self.in_h1 = False
        self.in_p = False
        self.in_li = False
        self.in_timestamp = False
        self.current_tag = None
        self.list_type = None
        self.list_items = []

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attrs_dict = dict(attrs)

        if tag == "h1":
            self.in_h1 = True
        elif tag == "p":
            self.in_p = True
            self.content.append("")
        elif tag == "span" and attrs_dict.get("id") == "timestamp":
            self.in_timestamp = True
        elif tag == "img":
            src = attrs_dict.get("src", "")
            if src:
                self.images.append(src)
                self.content.append(f"![image]({src})")
        elif tag == "ol":
            self.list_type = "ol"
            self.list_items = []
        elif tag == "ul":
            self.list_type = "ul"
            self.list_items = []
        elif tag == "li":
            self.in_li = True
            self.list_items.append("")
        elif tag == "br":
            if self.content:
                self.content[-1] += "\n"
        elif tag == "a":
            href = attrs_dict.get("href", "")
            if href and self.in_p:
                self.content[-1] += f"["

    def handle_endtag(self, tag):
        if tag == "h1":
            self.in_h1 = False
        elif tag == "p":
            self.in_p = False
        elif tag == "span" and self.in_timestamp:
            self.in_timestamp = False
        elif tag in ("ol", "ul"):
            if self.list_items:
                for i, item in enumerate(self.list_items):
                    if self.list_type == "ol":
                        self.content.append(f"{i+1}. {item}")
                    else:
                        self.content.append(f"- {item}")
            self.list_type = None
            self.list_items = []
        elif tag == "li":
            self.in_li = False
        self.current_tag = None

    def handle_data(self, data):
        data = data.strip()
        if not data:
            return

        if self.in_h1:
            self.title = data
        elif self.in_timestamp:
            self.timestamp = data
        elif self.in_li and self.list_items:
            self.list_items[-1] += data
        elif self.in_p and self.content:
            self.content[-1] += data


def parse_timestamp(ts):
    """Parse Tumblr timestamp to date."""
    # Format: "September 13th, 2015 8:21pm"
    ts = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', ts)
    try:
        dt = datetime.strptime(ts.strip(), "%B %d, %Y %I:%M%p")
        return dt
    except ValueError:
        try:
            dt = datetime.strptime(ts.strip(), "%B %d, %Y")
            return dt
        except ValueError:
            return datetime.now()


def slugify(title):
    """Convert title to URL slug."""
    slug = title.lower()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    slug = re.sub(r'-+', '-', slug)
    return slug.strip('-')[:50]


def convert_post(html_file):
    """Convert a single Tumblr HTML post to Jekyll markdown."""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    parser = TumblrPostParser()
    parser.feed(content)

    if not parser.title:
        parser.title = f"Post {html_file.stem}"

    date = parse_timestamp(parser.timestamp)
    slug = slugify(parser.title)
    filename = f"{date.strftime('%Y-%m-%d')}-{slug}.md"

    # Build markdown content
    md_content = []
    for para in parser.content:
        para = para.strip()
        if para:
            md_content.append(para)

    # Create front matter
    escaped_title = parser.title.replace('"', '\\"')
    date_str = date.strftime('%Y-%m-%d %H:%M:%S')
    front_matter = f"""---
layout: post
title: "{escaped_title}"
date: {date_str} -0500
tags: [tumblr-archive]
---

"""

    body = "\n\n".join(md_content)

    # Fix image paths
    for img in parser.images:
        if "../../media/" in img:
            img_name = img.split("/")[-1]
            body = body.replace(img, f"/assets/img/blog/{img_name}")

    return filename, front_matter + body, parser.images


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)

    # Copy media files
    if MEDIA_DIR.exists():
        for img in MEDIA_DIR.glob("*"):
            if img.is_file():
                shutil.copy(img, ASSETS_DIR / img.name)
                print(f"Copied: {img.name}")

    # Convert posts
    converted = 0
    for html_file in POSTS_DIR.glob("*.html"):
        try:
            filename, content, images = convert_post(html_file)
            output_path = OUTPUT_DIR / filename

            # Handle duplicate filenames
            counter = 1
            while output_path.exists():
                base, ext = filename.rsplit('.', 1)
                output_path = OUTPUT_DIR / f"{base}-{counter}.{ext}"
                counter += 1

            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"Converted: {html_file.name} -> {output_path.name}")
            converted += 1
        except Exception as e:
            print(f"Error converting {html_file}: {e}")

    print(f"\nConverted {converted} posts")


if __name__ == "__main__":
    main()
