---
layout: post
title: Thoughts
---

<div class="main">
   
    <ul class="post-list">
      {% for post in site.posts %}
        {% include post-list-item.html %}
      {% endfor %}
    </ul>

</div>
    