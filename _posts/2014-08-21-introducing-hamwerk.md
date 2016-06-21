---
layout: post
title: Introducing Hamwerk
---
I've been working on [Hamwerk](https://github.com/mathphreak/hamwerk) off and on for more than
a year now, and I'm finally ready to announce it to a wider audience.

## About Hamwerk
Hamwerk is a web-based system to keep track of homework assignments.  It's essentially
a hyper-specialized to-do list that isn't optimized for anything besides homework.

It has several features I'm proud of, including:

 * Every assignment is tied to a class
 * See assignments per class or all at once
 * Specify due dates in a natural way
 * Offline caching
 * Moderately useful onboarding that shows off all the features
 * Color-coded classes to easily see which assignments are for which classes
     (especially useful if your schedule is already color-coded)
 * Responsive interface that provides all features on mobile devices
 * Class abbreviations to show the full name of a class while allowing users
     to type something much shorter to specify the class
 * Class schedules for guessing due dates and sorting class list

## Project History
> Every good project begins by scratching a developer's personal itch.
>
> - Eric Raymond

I began working on Hamwerk because I hadn't found a good to-do list for my homework
assignments: everything I saw either suffered from feature creep or wasn't free,
and as an unemployed high school student I needed something free.  I had recently
encountered the [Meteor](http://meteor.com) framework, and I was also looking for a
good way to learn how to use it.  So I began work on Hamwerk in the summer of 2013.

I took Meteor's official Todos example and began tweaking it until it suited my
tastes.  I tweaked the interface, I strengthened the security, and I enhanced the
code to sort and do all the other things I wanted it to do.  Then the school year
started, and so I had higher priorities than developing Hamwerk.  I did revisit
Hamwerk briefly near the beginning of the school year to add offline caching to
compensate for the glitchy Wi-Fi at my school.

I had set up [Intercom](http://intercom.io) to get some data on my users, but I was
the only person that used it, so that was a bit of a moot point.

Near the beginning of the summer, one of my friends remembered that I had shown him
Hamwerk last year, so he asked me what was going on with it more recently.  As he was
playing around with it, I noticed a lot of problems that I hadn't experienced when I
was using it.  I realized that I needed to go in and fix all those problems to make
sure that it would work for me once I needed it again.

I went in and fixed a whole bunch of problems with it.  (The full list is accessible
[here](http://github.com/mathphreak/hamwerk/issues?q=is%3Aissue+is%3Aclosed+sort%3Acreated-asc)
if you're curious.)  As I was fixing those issues, I realized that Hamwerk was moving
towards a place where it would be useful to other people too.

So here we are.  On August 21st, 2014, I published this blog post.  I have no idea
as I write this how well it'll be received or how many people will use it.  But I
didn't make it for other people to use; I made it so that I could use it.  And use
it I will.  I'll suffer minor interface annoyances along with the rest of the userbase,
and I'll rejoice when new features are added alongside everyone else.

Unfortunately, this is all I have time to write now; I have to go do homework.
