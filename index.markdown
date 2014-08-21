---
layout: default
---
Hi!
===
I'm Matt Horn, also known as mathphreak.  I make cool stuff.

Sometimes I write [things](/posts.html), but not very often.  I have an [RSS feed](/feed.atom) that you can add to
whatever feed reader you use.
{% for post in site.posts limit:1 %}
The last thing I wrote was called [{{ post.title }}]({{ post.url }}).
{% endfor %}

stuff I'm making
----------------
### [Hamwerk](http://hamwerk.meteor.com)
A better homework system.

stuff I've made
---------------
### [BecauseWhyNot](https://github.com/mathphreak/BecauseWhyNot)
A DCPU-16 emulator/assembler/whatever.  The DCPU-16 was the CPU in Notch's canceled 0x10c.

### [CompetentDeathMessages](https://github.com/mathphreak/CompetentDeathMessages)
Custom death messages for Bukkit (Minecraft), done competently.
This was made for the Republica Minecraft server, which has since shut down.

### [a bit of music](http://mathphreak.bandcamp.com)

stuff I started but never finished so it doesn't count as being "made" but was still my responsibility
------------------------------------------------------------------------------------------------------
### [this website](https://github.com/mathphreak/mathphreak.github.com)
This is by far the coolest (and most finished) thing I've done.  Ever.  `:(`

### [Zrczr](https://github.com/mathphreak/Zrczr)
I had an idea a while back to make a game with HTML5 Canvas.  I didn't get very far before I lost
interest and moved on to something else.  I should probably go look at that again, as it sounds way
more feasible now.

### [the rest of the stuff on my GitHub](http://github.com/mathphreak)
