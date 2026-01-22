# Chirpy Migration - In Progress

## What's Done
- Chirpy starter template files copied to repo
- `_config.yml` configured with:
  - title: Vasja Volin
  - tagline: Staff Software Engineer | BJJ Coach
  - url: https://grobolom.github.io
  - github: grobolom
  - email: vasja.volin@gmail.com
  - linkedin: vasjavolin
  - timezone: America/Los_Angeles

## Content Backup Location
All original content preserved in `.backup_content/`:
- `_posts/` - 49 blog posts (2015-2022, from Tumblr)
- `_projects/` - 3 projects (fiscal-calendar-generator, skill-challenge-calculator, twitter-cli)
- `cv.yml` - CV data
- `about.md` - About page content

## Remaining Tasks
1. Copy posts from `.backup_content/_posts/` to `_posts/`
2. Create custom CV page (`_tabs/cv.md`) using data from `.backup_content/cv.yml`
3. Create projects page or integrate projects
4. Update `_tabs/about.md` with content from `.backup_content/about.md`
5. Test build with `bundle install && bundle exec jekyll serve`

## Git State
- Backup branch: `backup-al-folio` (original al-folio site)
- Current working tree has Chirpy files + backup content

## Shell Issue
Bash commands were failing during migration. May need to run git/file operations manually.

## Key Decisions
- No categories/tags needed
- No Disqus comments
- Keep Jekyll for GH Pages deploy
- Custom CV page to match Chirpy theme
