---
layout: post
title:  "Variable Scope"
date:   2015-07-25 00:00:00
categories: tech
---
<h2>"You shall not pass!" - Gandalf</h2>

Just as you have been taught in math class, a variable is a symbol that is assigned a value. In the case of Ruby, there are 4 variables: local, instance, class, and global.  They are used in different cases where there are certain levels they can 'pass'. Local variables can only pass one level while global variables can pass all of them. This can get confusing but luckily, Ruby makes variables very easy to distinguish by how they are called.

<h3>Local Variable: lower case letters</h3>

Local variables are named with lower case letters and underscore, "local_variable". They are only valid in the local area of the code it is called. For example, if the local variable is called inside a method, that variable only exists in the method. If you try to call it outside the method, you will get an error.

{% highlight ruby %}
def num
  local_var = [1, 2]
end

>> p num
=> [1, 2]

>> p local_var
=> NameError: undefined local variable or method
`local_var' for main:Object

{% endhighlight%}

In the example above, I created a local variable in my method num. Since this is a local variable that was created within the method num, it is local to the method. It cannot be accesses outside of the method. As you can see, from my example, when I called p local_var, terminal gave me an error.

<h3>Instance Variable: @</h3>

Instance variables are named with the @ symbol, "@instance_var". They are accessed with a specific instance of an object. Without calling an instance of the class first, the instance variable cannot be accessed.

{% highlight ruby %}
class Calculator
  def initialize(array_of_num)
    @nums = array_of_num
  end

  def add_five
    @nums.map!{|num| num + 5}
  end

end

>> example = Calculator.new([1, 2])
>> p example

=> #<Calculator:0x000000018f63c0 @nums=[1, 2, 3]>

>> p example.add_five
=> [6, 7]

{% endhighlight %}

Here I created an instance of class Calculator and named it example. I then called the method add_five. Method add_five takes the instance variable, @num, and changes it where five is added each time. When I call example, you can see that it was initialized with [1, 2]. Once I called add_five, @num returns [6, 7]. As you can see, the instance variable carries the variable, @num from the initialize to add_five.

<h3>Class Variable: @@</h3>

Class variables are named with @@, "@@class_var". They are like instance variables except they can be accessed in all instances of a class. This means that in the case where one instance of object changes the class variable, it is changed for all other instances as well. The class variables carry over throughout all instances of a class.

{% highlight ruby %}
class Calculator
  @@array_of_all_num = []

  def initialize(array_of_num)
    @nums = array_of_num
  end

  def add_five
    @nums.map!{|num| num + 5}
  end

  def combine
    @@array_of_all_num << @nums
  end

end

>> example = Calculator.new([1, 2])
>> p example.add_five
=> [6, 7]

>> example.combine
=> [[6, 7]]

>> example2 = Calculator.new([4, 5])
>> p example2.add_five
=> [9, 10]

>> p example2.combine
=> [[6, 7], [9, 10]]
{% endhighlight %}

The above example is built on the previous example. All I did was add a class variable, @@array_of_all_num and a new method which would push the add_five array to a class variable, @@array_of_all_num. I named my first instance of class Calculator "example" and my second instance "example2". When I called combine on "example2", since @@array_of_all_num is a class variable, it remembered the data I had stored from "example". That is why my result from calling combine on example2 resulting in [[6, 7], [9, 10]]. The class variable passed in between all instances of the class.

<h3>Global Variable: $</h3>

Global variable are named with $, "$global_var". They can pass through all everything. The below example shows exactly what that means

{% highlight ruby %}
$global = "hi"

def method_example
puts "Inside method"
puts $global
end

class Some_example
  def initialize
    puts "Inside class"
    puts $global
  end
end

>> method_example
=> Inside method
hi

>> class_example = Some_example.new
=> Inside class
hi

>> p $global
=> hi
{% endhighlight %}

I assigned a global variable, $global, with the string "hi". Even though I named $global in a class and method example, I will still able to call them.

<h3>Helpful Links</h3>

+ [New Circle: Ruby Scope][new-circle]
+ [Techotopia: Ruby Variable Scope][techotopia]
+ [Zetcode: Ruby Variables][zetcode]

[new-circle]: https://newcircle.com/bookshelf/ruby_tutorial/scope
[techotopia]: http://www.techotopia.com/index.php/Ruby_Variable_Scope
[zetcode]: http://zetcode.com/lang/rubytutorial/variables/