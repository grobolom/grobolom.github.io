---
layout: post
title: "A Great OO Talk"
date: 2015-05-11 20:26:00 -0500
---

Got linked this great talk by Sandi Metz about OO: [https://www.youtube.com/watch?v=8bZh5LMaSmE](https://www.youtube.com/watch?v=8bZh5LMaSmE)

In particular, the discussion about the open/closed principle towards the end is quite illuminating. I’ve always considered the O in SOLID to be a big vague, but Sandi makes it really clear - if you’ve properly separated the parts of your code that are configuration and the parts that are actions, it becomes simple to add functionality without modifying existing functionality.

The simple example is the Factory class - once you’ve refactored your code to use an ItemFactory, adding a new type of Item doesn’t require that you change either Item or ItemFactory - only the configuration of ItemFactory.