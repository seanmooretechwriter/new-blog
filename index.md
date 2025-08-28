---
layout: base.njk
title: Home
---

# Welcome to My Blog

This is a simple, old-school blog built with Eleventy. Fast, minimal, and focused on content.

## Recent Posts

{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url }}) - {{ post.data.date.toDateString() }}
{% endfor %}

---

## Subscribe

Stay updated with new posts by subscribing to our [RSS feed](/feed.xml).

*"The best websites are fast websites."*