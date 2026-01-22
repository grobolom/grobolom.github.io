---
layout: post
title: "Refactoring Woes"
date: 2015-05-07 21:44:00 -0500
---

I’m still learning that sometimes refactoring involves completely rethinking the responsibilities of the code involved. While even mediocre code tends to have well-thought-out responsibilities and separations of concerns, poorly-designed code tends to sneak in things that don’t belong.

For example, we’ve been working on refactoring a piece of code involved with categorizing shipments on a invoice. Said piece of code would grab a list of shipments, pull their categories, save them to the shipment records, and then log which rule was used to find the category.

When typed out, it seems obvious - logging which rules are hit is separate to the primary function of this process, which is to fetch and apply coding rules. However, until we considered this code from a testing standpoint, it was much less clear which piece of this code was giving us trouble.