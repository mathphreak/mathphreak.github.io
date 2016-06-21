---
layout: default
title: posts
permalink: /posts/
---
Recent Posts
------------
{% for post in site.posts %}
 * [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%B %Y" }})
{% endfor %}

[RSS feed](/feed.atom)
