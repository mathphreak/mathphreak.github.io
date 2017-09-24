---
layout: default
title: Projects
permalink: /projects/
---
"Finished" non-trivial projects
===============================

[MFTE](https://github.com/mathphreak/mfte)
------------------------------------------

The Magic-Free Text Editor. A Nano clone in Rust.

[Relief Valve]({{ site.url }}/ReliefValve/)
-------------------------------------------

Moves Steam games between storage locations. This was later built into Steam directly, rendering Relief Valve useless.

[Adding a feature to Rust](https://github.com/rust-lang/rust/pull/34694)
------------------------------------------------------------------------

The feature itself was trivial (one of the core Rust devs was surprised it didn't exist), but participating in the process that Rust has was a cool experience.

[Galactic Max]({{ site.url }}/Galactic-Max/)
--------------------------------------------

A hackathon-winning HTML5 game made with [Phaser](http://phaser.io) in 24 hours with some friends.

[Yummy Goodness](https://mathphreak.itch.io/yummy-goodness)
-----------------------------------------------------------

The economy from CS:GO as a standalone game. My first project with [Elm](http://elm-lang.org).

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
