---
title: "Design"
layout: archive
permalink: categories/dev
author_profile: true
---
{% assign posts = site.categories.dev %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}