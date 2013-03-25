---
layout: default
title: posts
---
Recent Posts
------------
{% for post in site.posts %}
 * [{{ post.title }}]({{ post.url }})
{% endfor %}