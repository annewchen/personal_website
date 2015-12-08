---
layout: post
title:  "Ruby Classes"
date:   2015-07-18 00:00:00
categories: tech
---
<h2>It's starting to get a bit messy in here...</h2>
<h3>What is a Class?</h3>

A Class is a way of organizing information. We have actually already been using built-in Ruby Classes without specfically addressing it. When you used [Ruby Docs][ruby-docs] to look for information on which methods to use, you can see that each method is organized under Class headings. For example, in my previous blog post concerning Arrays vs. Hashes, both Array and Hash are examples of Ruby's built-in Classes.

Using the same examples from my Array vs. Hash blog post, you can see this by calling the method #class as shown below:

{% highlight ruby %}
>> ["Monday", 2, "Wednesday", 4].class
=> Array

>> {"Hotdog"=>2.99, "Burger"=>4.99,"Soda"=>0.99,"Popcorn"=>1.99}.class
=> Hash
{% endhighlight%}

You can even see what methods are stored under each Class by calling #methods. I'll only show the example for Array because this can get a lengthly since it shows all of the methods:

{% highlight ruby %}
>> Array.methods
=> [:[], :try_convert, :allocate, :new, :superclass,
:freeze, :===, :==, :<=>, :<, :<=, :>, :>=,
:to_s, :inspect, :included_modules, :include?,
:name, :ancestors, :instance_methods,
:public_instance_methods, :protected_instance_methods,
:private_instance_methods,:constants, :const_get,
:const_set, :const_defined?, :const_missing,
:class_variables, :remove_class_variable,
:class_variable_get, :class_variable_set,
:class_variable_defined?, :public_constant,
:private_constant, :singleton_class?, :include,
:prepend, :module_exec, :class_exec, :module_eval,
:class_eval, :method_defined?, :public_method_defined?,
:private_method_defined?, :protected_method_defined?,
:public_class_method, :private_class_method, :autoload,
:autoload?, :instance_method, :public_instance_method,
:nil?, :=~, :!~, :eql?, :hash, :class, :singleton_class,
:clone, :dup, :itself, :taint, :tainted?, :untaint,
:untrust, :untrusted?, :trust, :frozen?, :methods,
:singleton_methods, :protected_methods, :private_methods,
:public_methods, :instance_variables, :instance_variable_get,
:instance_variable_set, :instance_variable_defined?,
:remove_instance_variable, :instance_of?, :kind_of?,
:is_a?, :tap, :send, :public_send, :respond_to?, :extend,
:display, :method, :public_method, :singleton_method,
:define_singleton_method, :object_id, :to_enum, :enum_for,
:equal?, :!, :!=, :instance_eval, :instance_exec,
:__send__, :__id__]
{% endhighlight %}

Now that was very long...

So as you can see, Class is just a way of organizing information and we have already been using Ruby's built-in Classes. Even Integer and String are examples of Classes. To get the full list, you can look at the list on the left-hand side of [Ruby Docs][ruby-docs].

<h3>When to use?</h3>

A Class is used when you want to organize information. When you have a lot of methods and variables that all fall under a common theme, you can group them into a Class. That way you can keep reusing the information and it is convenient for you to edit. This is useful for when you start to make your own Classes.

<h3>How to use?</h3>
<h4>Create an empty Class</h4>

Let's go ahead and try creating a Class from a real-world example of going to a restaurant. Let it be named Restaurant.

{% highlight ruby %}
class Restaurant
end
{% endhighlight %}

<h4>Add an initialize</h4>

We should think about what we want it to do first when it is run. This is called the initialize. In our case, I want the Class to take the name of the restaurant and your order as its arguments and print a greeting string.

{% highlight ruby %}
class Restaurant

  def initialize(name, food)
    p "Welcome to #{name}"
  end

end
{% endhighlight %}

<h4>Add instance methods</h4>

It is time to think of variables and methods to put in our Class. Since methods are like actions, we can create the instance methods: eat and leave. These are called instance methods because you will need to create a new instance of Class Restaurant in order to call it. Below I will first add my empty instance methods.

{% highlight ruby %}
class Restaurant

  def initialize(name, food)
    p "Welcome to #{name}"
  end

  def eat
  end

  def leave
  end
end
{% endhighlight %}

Now I will create an instance of Restaurant named example. Then I will call my instance methods eat and leave on it.

{% highlight ruby %}
>> example = Restaurant.new("InnOut", "fries")
=> "Welcome to InnOut"

>> example.eat
=> nil

>> example.leave
=> nil
{% endhighlight %}

Calling my methods currently result in 'nil'. Let's fix this by giving it something to output.

<h4>Add instance variables</h4>

Now that we have more than one method, we are going to start running into problems with our local variable, name. It is a local variable because it will only work in #initialize. In order to make it work in #eat and #leave, we will need to make them into instance variables by assigning them with the @ symbol. I will go ahead and do that in #initialize for variables name and food.

{% highlight ruby %}
class Restaurant

  def initialize(name, food)
    @name = name
    @food = food
    p "Welcome to #{@name}"
  end

  def eat
    p "You ate the #{@food}"
  end

  def leave
    p "You left #{@name}"
  end

{% endhighlight %}

<h4>Create an instance of my Class and run it</h4>

Finally, let's go ahead and run our code to see what prints. Again, I will create an instance of our Class Restaurant and name it example. Then I will call my instance methods #eat and #leave on it.

{% highlight ruby %}
>> example = Restaurant.new("InnOut", "fries")
=> "Welcome to InnOut"

>> example.eat
=> "You ate the fries"

>> example.leave
=> "You left InnOut"
{% endhighlight %}

Everything works the way we expected it to! Congrats, you have just created your first Class.

[ruby-docs]: http://ruby-doc.org/core-2.0.0/