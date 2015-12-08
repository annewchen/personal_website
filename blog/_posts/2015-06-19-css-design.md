---
layout: post
title:  "CSS Design"
date:   2015-06-19 00:00:00
categories: tech
---
<h2>Why is Everything Shifting?!</h2>

CSS is made up of many different properties and the one that I want to discuss today is the one that gave me the most amount of grief when creating my website - Display.

Now before diving in, let us first think back to when we first used Microsoft Office: Word. At some point or another, we have all had to use some sort of writing program (MS Word was my first). Now did you ever have to add a photo or image? Well I had to - many times. And what do I remember most about pasting that image? My entire document format going crazy as a direct result! You have to format your image in order to fix everything. I mention this because CSS's display property has the same concept.

The display property controls the basic layout of your website. Think of every element you put on a website as being in an invisible box. The display property is your way of telling those invisible boxes how to behave with each other. Most issues arise because boxes cannot overlap. There are four basic values that a display property can have which are explained below.

<h3>Block</h3>

  {% highlight ruby %}
    p {
    display: block;
    height: 3em;
    width: 3em;
    }
  {% endhighlight %}

![Block Image](/blog/assets/20150619_block.png)

The Block value makes the box sit on it's own line. It also adds a line break before and after it.

<h3>Inline</h3>
  {% highlight ruby %}
    p {
    display: inline;
    height: 3em;
    width: 3em;
    }
  {% endhighlight %}

![Block Image](/blog/assets/20150619_inline.png)

The Inline value makes the box only take as much space as needed. In my example, it overwrote my height and width values. It allows other boxes to sit on the same line.

<h3>Inline-Block</h3>
  {% highlight ruby %}
    p {
    display: inline-block;
    height: 3em;
    width: 3em;
    }
  {% endhighlight %}

![Block Image](/blog/assets/20150619_inlineblock.png)

The Inline-Block value is, as its name implies, a combination of inline and block. It is like inline in that it still lets other boxes sit on the same line. The difference is that you can specify a height and width for the box.

<h3>None</h3>
  {% highlight ruby %}
    p {
    display: none;
    height: 3em;
    width: 3em;
    }
  {% endhighlight %}

![Block Image](/blog/assets/20150619_none.png)

The None value simply makes the  box invisible. This can be used it you want something running in the background and not to be seen by the user.

In conclusion, the display concepts are not too hard to understand. It is definitely a lot easier seeing the comparisons side-by-side. I hope this reference was helpful to you. Have fun coding!

<h4>A few helpful references:</h4>
+ [W3School][w3schools]
+ [LearnLayout][learnlayout]
+ [CSS-Tricks][css-tricks]



[w3schools]: http://www.w3schools.com/css/css_display_visibility.asp
[learnlayout]: http://learnlayout.com/display.html
[css-tricks]: https://css-tricks.com/almanac/properties/d/display/