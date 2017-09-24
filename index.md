---
layout: default
---
Hi!
===
I'm Matt Horn, occasionally known as mathphreak. I have [a very particular set of skills](/skills/).

I've worked on [several projects](/projects/) in the past, some of which I finished and some of which I'm still working on.

Sometimes I [write things](/posts/), but not very often. {% for post in site.posts limit:1 %}
Most recently, I wrote [{{ post.title }}]({{ post.url }}) in {{ post.date | date: "%B of %Y" }}.
{% endfor %}
