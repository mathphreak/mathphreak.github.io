---
layout: default
---
Hi!
===
I'm Matt Horn, also known as mathphreak.  I make cool stuff.

Sometimes I write [things](/posts.html), but not very often.  I have an [RSS feed](/feed.atom) that you can add to
whatever feed reader you use.
{% for post in site.posts limit:1 %}
Most recently, I wrote [{{ post.title }}]({{ post.url }}) in {{ post.date | date: "%B of %Y" }}.
{% endfor %}

current projects
================

[Galactic Max](/Galactic-Max/)
------------------------------

An HTML5 game made with [Phaser](http://phaser.io) in 24 hours with some friends.

[Relief Valve](/ReliefValve/)
-----------------------------

Moves Steam games between drives. Not quite ready.

old projects
============

[Komodo](https://github.com/KamikazeKumquatsLLC/komodo)
-------------------------------------------------------

Realtime classroom quizzes, hosted and played through the Meteor platform.

Probably functional. Possibly outdated. Definitely abandoned.

[Hamwerk](https://github.com/mathphreak/hamwerk)
------------------------------------------------

A better homework system.

I haven't touched it since about September of 2014.
It might still have active users; I'm not even sure how to tell.

[BecauseWhyNot](https://github.com/mathphreak/BecauseWhyNot)
------------------------------------------------------------

A DCPU-16 emulator/assembler/whatever.
The DCPU-16 was the CPU in Notch's canceled game 0x10c.

[CompetentDeathMessages](https://github.com/mathphreak/CompetentDeathMessages)
------------------------------------------------------------------------------

Custom death messages for Bukkit (Minecraft), done competently.
This was made for the Republica Minecraft server, which has since shut down.

[a bit of music](http://mathphreak.bandcamp.com)
------------------------------------------------
