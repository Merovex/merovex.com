---
title: "Sales Charts"
permalink: /sales/
---

{% assign posts = site.sales-charts | sort: 'date' %}
{% for post in posts %}
1. [{{post.title}}]({{post.url}}){%endfor%}
