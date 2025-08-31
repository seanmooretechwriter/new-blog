---
layout: base.njk
description: "Real world AI coding examples and practical techniques for debugging, refactoring, and code review using Claude, ChatGPT, Cursor. Clean up messy code fast."
---

# Welcome to AI Code Chef

A blog about AI-assisted programming in the modern world.

---

## Recent Posts

{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url }}) - {{ post.data.date.toDateString() }}
{% endfor %}

---

## Subscribe

Stay updated with new posts by subscribing to our [RSS feed](/feed.xml).

{% set randomQuote = quotes | randomQuote %}
*"{{ randomQuote.text }}"* — {{ randomQuote.author }}