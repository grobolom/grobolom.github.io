---
layout: post
title: "Simple Python Asyncio"
date: 2016-05-19 00:49:00 -0500
---

Until recently, I had been struggling to find a good tutorial on Python's asyncio. I was finding that most tutorials handled relatively simple use cases. Either they would demonstrate the use of futures and callbacks as a way of handling asynchronous requests or they would provide an analogue to the usual threading example of splitting up work between a bunch of threads/coroutines. While these are useful examples, my particular use case was different. I needed to communicate between multiple long-running processes, for example something like a chat client.

We'll be doing this from the bottom up, so bear with me. Here's our main function in python 3.4+:

Fairly simple. We have an event loop, which is like what a browser silently provides for us when we do front-end javascript. Here, it's explicit, and it will be important for us a bit later when running coroutines. We also have an async queue, which we'll be using to communicate between our different coroutines. The last line of the method tells our loop to run the function `our_process` until it completes. Let's look at that next.

Less simple, so let's explain. `asyncio.async` (now `asyncio.ensure_future`) schedules our two collaborating coroutines. We have a reader, which we'll get to in a minute, and a `something_slow` method that's going to run a process that takes a long time. This will serve as an example of how execution will jump between these processes.

While above we said `loop.run_until_complete`, we're going to be looping forever here, since this is our main process, and is what we would normally expect in something like a chat client - loop forever until we send some sort of 'quit' signal. We're going to try to pull items from the queue as soon as they come in and print them. `yield from` will tell this coroutine to pause here and wait until `queue.get()` returns data. Seems solid so far. Let's look at our helper coroutines next.

This is fairly simple. We wait 10 seconds and then push a message to the queue. We need the `yield from` for each because both statements are coroutines themselves, so that's how we pass control to them.

Here's the main source of our complexity. We've got another long-running coroutine here - our process will switch between this and `our_process` a bunch as we push things into the queue and read them back. We need the loop because we're going to call `run_in_executor`, which tells our coroutine to run the `get_input` function in the 'background'. By default, `run_in_executor` will run in a separate thread, though we could have it run in a separate process for better performance.

Here's our last bit, and it's pretty simple. This isn't a coroutine, since we're running it in a separate process using `loop.run_in_executor`. We're using `blessed` for its terminal capabilities, such as nice non-blocking IO and reading single keystrokes.

So let's review for a moment what we've got. We have two long-running coroutines, `our_process` and `reader`, which communicate via an `asyncio.Queue`. They bounce back and forth - whenever one hits a `yield from` it waits, and the event loop schedules them to run whenever the results of that `yield from` is ready. One of our coroutines reads from a queue whenever an item is ready and prints it out. The other coroutine runs an input process in the background and pushes the results into the queue.

If you run this code, you should be able to press keys and see them printed to the screen fairly instantly. Also, about ten seconds after running the process, you should see `something slow is done` appear on the screen. This is our third coroutine waking up after the `yield from asyncio.sleep(10)` and pushing its own stuff into the queue.

That's everything. Hopefully that gives you a better illustration of what happens when we have multiple coroutines running in infinite loops, as well as how they communicate. If you need more examples, I highly recommend looking at a [simple asyncio chat client](https://gist.github.com/gregvish/7665915) as a similar but more complete example. Also feel free to leave comments or questions below.
