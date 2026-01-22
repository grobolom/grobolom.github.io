---
layout: post
title: "Integration Testing"
date: 2015-05-05 20:53:00 -0500
tags: [tumblr-archive]
---

So, I finally cleaned up a giant mess of code that I have been meaning to refactor for a long time. Unfortunately, said code is completely untested and features a huge amount of raw SQL queries. As a result, testing was impossible at the start, since I needed to separate a lot of stuff into a data access layer before I could do so.

Now that that’s done, however, I’ve found that I still can’t easily unit test this code. Most of what is reused is extremely simple, and the rest is basically direct calls to the database. I have tested what I can, but it looks like the majority of this is going to be integration tests, as the central part to be tested is a single procedure that calls out to several services.

Generally, I’m not opposed to writing integration tests, but I find it’s often very frustrating. Testing an set of components, wired together, requires quite a bit of setup code and mocking. Now, this could point to the obvious - the code is still poorly designed, and does too much. I am not discounting this as true, however, while in the ideal world we would identify how to perfectly create modules, often times in the real world it is difficult. Distilling this code into a simpler procedure is difficult, and would likely require a redesign of the basic algorithm. This would take too much time, and since our primary goal at the moment is code coverage for any regression testing, I find it’s fairly unproductive.

I suppose my point is that one should not necessarily be striving for perfection in his refactoring and tests. Do what you can with the time you have, and focus on the most broken areas first. If complex tests are the result, at least take comfort in the fact that you are still significantly improving the quality of your code base.