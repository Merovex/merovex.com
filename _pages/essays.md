---
layout: default
permalink: /essays/
title: Essays
---

{% include navbar.html %}
<main class="page-content" aria-label="Content">
<header>
    <h1 class="post-title" itemprop="name headline">
        <div class="container">
            {{ page.title | escape }}
        </div>
    </h1>
</header>

<div class='jumbotron' style='margin-top: -8px;'>
  <div class='row'>
    {%- for post in site.posts limit: 6 -%}
    <div class='col-lg-4 col-md-6 col-sm-12'>
      {% include post-card.html %}
    </div>  
    {% endfor %}
  </div>
</div>

<div class='container'>
  <div class='row'>
    <div class='col-lg'>
      
<h2>Essays Categories</h2>
  <ul>{%- assign categories_list = site.categories -%}
  {%- if categories_list.first[0] == null -%}
    {% for category in categories_list %}
      <li><a href="#{{ category }}">{{ category | capitalize }} ({{ site.tags[category].size }})</a></li>
    {%- endfor -%}
  {%- else -%}
    {% for category in categories_list %}
      <li><a href="#{{ category[0] }}">{{ category[0] | capitalize }} ({{ category[1].size }})</a></li>
    {%- endfor -%}
  {%- endif -%}
{% assign categories_list = nil %}
  </ul>

{% for tag in site.categories %}
  <h3 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h3>
  <ul>
    {%- assign pages_list = tag[1] -%}
    {%- for post in pages_list -%}
      {%- if post.title != null -%}
        {%- if group == null or group == post.group -%}
          {% if post.external_url %}
      <a href="{{ post.external_url }}">{{ post.title }}</a>
          {% else %}
      <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
          {%- endif -%}
        {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    {%- assign pages_list = nil -%}
    {% assign group = nil %}
  </ul>
{% endfor %}
</div>
<div class='col-lg'>

<h2>Essays by Year</h2>
{% for post in site.posts %}{% assign currentdate = post.date | date: "%Y" %}{% if currentdate != date %}{% unless forloop.first %}    </ul>{% endunless %}
      <h3 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h3>
      <ul>{%- assign date = currentdate -%}{% endif %}
        <li><a href="{{ post.url }}">{{ post.title }}</a> [{{ post.category }}]</li>{% if forloop.last %}</ul>{% endif %}{% endfor %}

      <p class="rss-subscribe">subscribe <a href="{{ "/atom.xml" | relative_url }}">via RSS</a></p>

    </div>
  </div>
</div>
</main>
{%- include footer.html -%}
