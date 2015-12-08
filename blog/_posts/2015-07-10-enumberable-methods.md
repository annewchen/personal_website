---
layout: post
title:  "Enumerable Methods"
date:   2015-07-10 00:00:00
categories: tech
---
<h2>This week COULD have been so much easier...</h2>

<h3>Enumerables</h3>

There are many classes in Ruby that each have there own specialized methods. If you want to have a set of methods that work for mutiple classes, those methods must be put into a module (a collection of methods and constants). An Enumerable is a module. A class can only use the Enumerable module if it has a defined .each method. This is an method that takes self as a parameter and runs a given block. The Enumerable module includes many methods that can change, pull, and organize elements.

Today I am going to look at the Enumerable method #group_by. I chose this particular method because my workload for this week would have been so much easier if I had found this method sooner.

<h3>.group_by</h3>

The basic concept of group_by is that it takes an collection of items and returns a key-value hash. You have to set a condition in which you want those items to be organized. The condition then becomes the key part of the hash and all of the items that fit into the condition becomes the value part of the hash. You called the method with `.group_by{ }`. In the block portion, you have to define self and specify a condition of organization.

<h4>Example 1</h4>

This example is very similar to the one found in the ruby-doc definition. I am going to call the method on an array of numbers.

{% highlight ruby %}
>> (1..20).group_by{ |num| num%3}

=> {
1=>[1, 4, 7, 10, 13, 16, 19],
2=>[2, 5, 8, 11, 14, 17, 20],
0=>[3, 6, 9, 12, 15, 18]
}
{% endhighlight %}

(1..20) denotes the array including the range of numbers from 0 to 20 including 20. I called the method and in the block portion I typed `|num| num%3`. `|num|` means do the following for every element in the array. `num%3` says divide each element by 3, and return the remainder. The 3 resulting remainders were 0, 1, and 2. Those 3 remainders were set as the keys in the hash. All of the elements in the array list that fall into those categories were placed into the value of those respective keys.

<h4>Example 2</h4>

Now here is an example on an Array of strings.

{% highlight ruby %}
>> friends = ["Jim", "Roy", "Grace", "Danny", "Bella"]
>> friends.group_by{ |name| name.length}

=> {
3=>["Jim", "Roy"],
5=>["Grace", "Danny", "Bella"]
}
{% endhighlight%}

In this case, I called the group_by method on an Array of names. In my block I told it to organize the names by the length of characters. The length amount was put into the keys of the hash and the names into the values.

<h4>Example 3</h4>

For my last example, I called group_by method on a hash.

{% highlight ruby %}
>> friends ={
"Jim" => "dog",
"Roy" => "dog",
"Grace" => "dog",
"Danny" => "cat",
"Bella" => "fish",
"Sandy" => "cat",
"Dave" => "rabbit",
"Spring" => "fish"
}

>> friends.group_by{ |owner, pet| pet}

=> {
"dog"=>[["Jim", "dog"], ["Roy", "dog"], ["Grace", "dog"]],
"cat"=>[["Danny", "cat"], ["Sandy", "cat"]],
"fish"=>[["Bella", "fish"], ["Spring", "fish"]],
"rabbit"=>[["Dave", "rabbit"]]}
{% endhighlight %}

In this case, I created a hash of names of friends and the type of pets they own. In my block, I stated that I wanted my hash organized by pet type. My resulting hash has the pet type as the key and all of the corresponding pairs that contain specified pet in the value.

<h4>A few helpful references:</h4>
+ [Ruby Docs][ruby-docs]
+ [Blog Post on Mixin][mixins]

[ruby-docs]: http://ruby-doc.org/core-2.0.0/Enumerable.html
[mixins]: http://www.sitepoint.com/ruby-mixins-2/
