---
layout: post
title: "CB3-131 GalliumOS Snags"
date: 2016-04-01 23:39:00 -0500
tags: [tumblr-archive]
---

I’m a huge fan of Gallium so far, but when installing it on my new acer I was having some trouble at first.

First, the instructions were not 100% clear on the order that you need to follow to install the new operating system. I reran the install twice by accident, and only then understood that the ‘repeat steps 2-4′ would look exactly the same on both. Luckily,[the new documentation is much, much betterand covers the issues I was having.

There’s another stick where depending on how you selected your install, keeping the USB drive or stick you have pluggied in on boot will actually prevent you from booting gallium. Apparently there’s a behind-the-secones issue where the process gets stuck in a loop between trying trying to boot from the empty stick.

The next sticking point is wifi + screen brightness.[Take a gander at this github issue to see if it’s been fixed, but by default xscreensaver is set to blank the screen on idle. Unfortunately, this kills the wifi and resets your screen brightness to a random preset value. It also doesn’t properly check for idleness, so it actually kills your wifi every few minutes while you’re working. Fantastic. Luckily, the solution seems to be simply turning off xscrensaver. Easy.

The final snag is getting the left-alt + up/down to page-up/down. While the default keymap can be selected to have right alt or the search button mapped to the overlay to duplicate this functionality, no matter what is selected the left alt keystrokes are eaten up. To fix this, either install xbindkeys-config via apt-get or simply add the following to your .xbindkeysrc file:

Hope this helps you avoid some of the issues I was having with this install. Otherwise it’s been a great productivity boost and I’m happy to be developing locally again!