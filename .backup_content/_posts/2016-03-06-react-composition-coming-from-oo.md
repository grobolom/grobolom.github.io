---
layout: post
title: "React Composition Coming From OO"
date: 2016-03-06 19:27:00 -0500
tags: [tumblr-archive]
---

I’m finally starting to work with React in my spare time and I’m enjoying it immensely. While I had a fairly long stint with Angular there were always hiccups with code organization that I couldn’t quite wrap my head around. Since I wasn’t studying it consistently, I never really got around those hangups. However, React doesn’t seem to have to same issues for me.

The biggest reason why learning React has been especially smooth for me is the emphasis on composition. Every React component (and basically every tutorial) is always built up out of smaller components. Due to the organization and architecture of the code, the path of least resistance happens to also be the path of best practice. This is a huge boon for those, like me, who are coming out of a heavy OO, server-side background.

One of the biggest hurdles when leaving the land of legacy code and mediocre programming is understanding how and when to compose your code out of smaller parts. It’s one of the biggest lessons, and the one most often emphasized, but coming from PHP I’ve found very few resources on understanding just how to do that. Even looking at fairly common frameworks like Laravel and Symfony is not often helpful; their components require a large amount of complexity to handle all the disparate use cases that come up.

React, however, handles this in spades. By working from the smallest piece up and providing[a very good guideon how to achieve this separation of components, it manages to bake its best practices directly into the ecosystem. Even working on my extremely simple food logging app, it was entirely natural to split each piece - calorie ticker, logged food list, input controls, individual log entries - into a hierarchy and proper folder structure. I’m excited to work with it even further.