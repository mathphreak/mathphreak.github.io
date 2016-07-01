---
layout: default
title: Projects
permalink: /projects/
---
"Finished" non-trivial projects
===============================

[Relief Valve]({{ site.url }}/ReliefValve/)
-------------------------------------------

Moves Steam games between storage locations. For some reason, this isn't built in to Steam directly.

[Galactic Max]({{ site.url }}/Galactic-Max/)
--------------------------------------------

A hackathon-winning HTML5 game made with [Phaser](http://phaser.io) in 24 hours with some friends.

[halfhearted]({{ site.url }}/halfhearted/)
--------------------------------------------

A roguelike built with React for FreeCodeCamp.

Abandoned non-trivial projects
==============================

[Komodo](https://github.com/KamikazeKumquatsLLC/komodo)
-------------------------------------------------------

Realtime classroom quizzes, hosted and played through the Meteor platform.

Probably functional. Possibly outdated. Definitely abandoned.

[Hamwerk](https://github.com/mathphreak/hamwerk)
------------------------------------------------

A Meteor-based todo list specialized for homework. I made it when I needed it, and I abandoned it when I didn't.

[BecauseWhyNot](https://github.com/mathphreak/BecauseWhyNot)
------------------------------------------------------------

An emulator for the fictional DCPU-16 from Notch's canceled 0x10c.

[Personal miscellany](/projects/misc/)
--------------------------------------

Several things I worked on that weren't published for one reason or another.

Every single GitHub repo
========================
{% assign repositories = site.github.public_repositories | sort: 'pushed_at' | reverse %}
{% for repository in repositories %}
  {% assign start = repository.created_at | date: "%B %Y" %}
  {% assign end = repository.pushed_at | date: "%B %Y" %}
  * [{{ repository.name }}]({{ repository.html_url }})
    {{ start }} {% if start != end %} - {{end}}{% endif %}
    {% for info in site.repo_info %}
    {% if info.repo == repository.name %}
    {{ info.output | markdownify | strip_newlines }}
    {% endif %}
    {% endfor %}
{% endfor %}
