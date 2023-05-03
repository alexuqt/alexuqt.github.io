---
title: Home page
layout: layouts/base.njk
permalink: /
---

<p class="subhead">This is the personal website of an engineering student<p>

Hello! Welcome to demo upsi

{% for snippet in collections.snippets %}

<h2>{{ snippet.data.title }}</h2>
<p>{{ snippet.data.description }}</p>
{% endfor %}

a

{% for post in collections.posts %}

<ul>
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
</ul>
{%- endfor %}
