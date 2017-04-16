---
permalink: /books/
title: 'Postal Marine Series'
date: 2012-07-15 12:33
main_nav: true
---

{% assign books = site.books | sort: 'series' %}
{% for book in books %}

{% unless book.hidden %}
{% include book-summary.html %}
{% endunless %}
{% endfor %}