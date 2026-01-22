---
layout: post
title: "Evolution of a Simple Design"
date: 2016-03-04 00:58:00 -0500
---

![image](/assets/img/blog/140432119554_0.png)

Getting things off the ground isn’t easy, but it’s a great feeling to come up with something that simplifies everything.

I had designed a simple food log app that I could use for keeping track of my calories. My initial design involved typing in the food, the amount of it, and how many calories each thing was. This would be fairly quickly, painless, and the app would automatically total these things up and give you some nice day-to-day information on your calorie totals.

However, this wasn’t good enough. I found that my own use of the app was stagnating - I had actually moved to Google Spreadsheets and changed my logging significantly. I was no longer concerned with even writing down what I had eaten - what was important was the amount of calories, full stop.

So building on a user experience (even though it was my own), I decided to simplify the design from the user side. Now, I would simply extract the information about the calories directly from the food input. As long as the user listed the calories last, the app would now track them without any additional tabbing or inputs.

While this design could run into some problems - longer food logs because it would be tougher to consolidate foods by simply increasing the unit counts; missing information because of imperfect user inputs - I think this not only increases the usability but also reduced significantly the mental friction of use. It’s a solid solution, and with the simpler app (aside from a few regexes that needed writing) I even have a faster MVP. Time to keep cracking!