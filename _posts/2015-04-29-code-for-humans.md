---
layout: post
title: "Code for Humans"
date: 2015-04-29 09:34:00 -0500
tags: [tumblr-archive]
---

It’s critical that high-level code is understandable by humans primarily. Often times, new developers (myself included, at least in the past) get caught up writing code that’s ‘optimal’ without considering whether or not it is readable or understandable. However, nothing in the programming world takes more time than maintenance, and code you can’t understand is many orders of magnitude harder to maintain. For example:

That’s a PHP function declaration. Would you be surprised to know that this function logs a record to the database? That it knows the user you are logged in as? That it pulls the time if it’s already been set in the script?

Maybe it’s not a big deal - you can read the function after all. But sometimes you need to work quickly and you need to understand something quickly - so you skim over a random line that declares the time and delete it, and now your carefully calculated logging system that requires every step of your invoicing process to have the exact same timestamp grinds to a screeching halt. On a Tuesday night, right before the automated scripts send out the invoices to your customers. Now you wake up on Wednesday to several hundred angry emails and possibly a pink slip in the mail.

Write your code so everyone after you can understand it. Document thewhy, not the what. Don’t use extract() or global if you’re writing PHP.