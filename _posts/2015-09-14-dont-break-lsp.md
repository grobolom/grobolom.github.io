---
layout: post
title: "Don’t break LSP"
date: 2015-09-14 22:50:00 -0500
---

Seriously, don’t do it! The Liskov Substitution Principle doesn’t come up particularly often in my experience, as moving from inheritance to composition often prevents situations arising where it might be broken. However, when you break it, it can be incredibly difficult to refactor your code to a reasonable place without making huge changes.

As a practical example, I’m working on a piece of code that renders some data as an HTML table. At some point, I created a sub-class to it that added totaling functionality to it.

However, now I’m trying to separate out the printing of the table internals from the headers and footers to reuse elsewhere in our system, and i’m finding this break of LSP means I can’t safely extract the code without breaking the totaling. Unfortunately, even creating a clean wrapper to just these two pieces of code is not simple. Having a method on the subclass that doesn’t exist on the superclass makes it almost impossible to separate this functionality without doing a full rewrite. So don’t do it! Don’t break LSP! (unless you have a very good reason)