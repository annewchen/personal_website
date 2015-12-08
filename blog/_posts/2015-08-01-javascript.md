---
layout: post
title:  "Javascript"
date:   2015-08-01 12:00:00
categories: tech
---
<h2>“You like to-may-toes and I like to-mah-toes” - George and Ira Gershwin</h2>

When I started this week, I knew I was going to learn about JavaScript. Not having any prior experience in JavaScript, I was worried about how fast I could learn the new language. To my delight, JavaScript is very similar to Ruby. Just picking on a particular topic, I am going to compare and contrast Ruby's Hashes and Javascript's Objects to demonstrate this. Objects are pretty much Javascript's version of Ruby's Hashes. Data is assigned in a pair.

<h3>Learning the Vocab</h3>

To start off this topic, let's get the terminology correct. In Ruby, hashes have a key/value pair. In JavaScript, objects have a property/value pair.

<h3>Naming a Hash/Object</h3>

{% highlight ruby %}
# Ruby Hash

hash_example = {
key1: 'value1',
key2: 'value2'
}
{% endhighlight %}

{% highlight ruby %}
// JavaScript Object

var hashExample = {
key1: 'value1',
key2: 'value2'
};
{% endhighlight %}

Now there are only 3 differences if you compare these side by side. The first is that Ruby's convention of naming includes lower case letters and underscore while JavaScript includes mostly lower case except the first letter of every new word is capitalized. The second difference is that in JavaScript, you need to prefix any variable assignments with 'var'. Lastly, in JavaScript, it is standard separate your statements with a semicolon at the end. Other than that, the naming process looks pretty similar.

<h3>Fetching a Value</h3>

The next comparison point I would like to point out is how to fetch a value. Going off of the above hash_example and hashExample, I will fetch the value named "value1"

{% highlight ruby %}
# Ruby Hash
>> p hash_example[:key1]
=> "value1"
{% endhighlight %}

{% highlight ruby %}
// JavaScript Object
>> console.log(hashExample.key1);
=> value1
{% endhighlight %}

Now things are getting interesting. First of all, notice that in Ruby, you can display the output in the terminal by using 'p' while in JavaScript, it is 'console.log()'. A lot more characters in JavaScript. Now in Ruby, you use the bracket and the symbol key1. (**Note, if you had made key1 a string, you will call it with "key1" instead). In JavaScript, you simply use a period followed by the property name.

<h3>Assigning a New Pair</h3>

It is time to see what is different in adding a new key/value and property/value pair.

{% highlight ruby %}
# Ruby Hash
>> hash_example[:key3] = "value3"
>> p hash_example

=> {:key1=>"value1", :key2=>"value2", :key3=>"value3"}
{% endhighlight %}

{% highlight ruby %}
//JavaScript Object
>> hashExample.key3 = "value3";
>> console.log(hashExample);

=> { key1: 'value1', key2: 'value2', key3: 'value3' }
{% endhighlight %}

Both of these ways of assigning a new pair are pretty similar. But note that just like in the Fetching a Value section, Ruby utilizes brackets while Javascript, periods.

<h3>Nested Hashes/Objects</h3>

Nesting hashes and objects work exactly the same way. I have given a example below where a hash_example2/hashExample2 were created and nested in hash_example/hashExample.

{% highlight ruby %}
# Ruby Hash

hash_example2 = {apples: 'oranges'}

>> hash_example[:key3] = hash_example2
>> p hash_example

=> { :key1=>"value1",
:key2=>"value2",
:key3=>{:apples=>"oranges"}
}
{% endhighlight %}

{% highlight ruby %}
# JavaScript Objects

var hashExample2 = {apples: 'oranges'}

>> hashExample.key3 = hashExample2
>> console.log(hashExample)


=> { key1: 'value1',
key2: 'value2',
key3: { blah: 'blah' }
}
{% endhighlight %}

<h3>Summary</h3>

Differences to note:
  <table>
    <thead>
      <tr>
        <th>Ruby: Hashes</th>
        <th>JavaScript: Objects</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>names variables with lowercase and underscore</td>
        <td>names variables with lowercase and capitalized first letters</td>
      </tr>
      <tr>
        <td>no prefixes to assigning variables</td>
        <td>assigns variables with "var"</td>
      </tr>
      <tr>
        <td>no special end statements</td>
        <td>ends statements with ";"</td>
      </tr>
      <tr>
        <td>fetches values with "[]"</td>
        <td>fetches values with "."</td>
      </tr>
      <tr>
        <td>displays with "p"</td>
        <td>displays with "console.log()"</td>
      </tr>
    </tbody>
  </table>

<br>
Overall, I noticed that Ruby had a lot of choices. Ruby accepts keys that are strings or symbols and can assign with either the colon ":" or foward arrow "=>". JavaScript is a bit more ridged in that it only takes strings as keys and ca only assign with the semicolon. Also, Ruby has a lot of display options with "p", "print", or "puts" while JavaScript only takes "console.log()".
