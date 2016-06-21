---
layout: default
---
Hi!
===
I'm Matt Horn, occasionally known as mathphreak. I have [a very particular set of skills](/skills/).

I've worked on [several projects](/projects/) in the past, but right now (mid-2016) my first priority is my education.

Sometimes I [write things](/posts/), but not very often. {% for post in site.posts limit:1 %}
Most recently, I wrote [{{ post.title }}]({{ post.url }}) in {{ post.date | date: "%B of %Y" }}.
{% endfor %}
