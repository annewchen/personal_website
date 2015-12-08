---
layout: post
title:  "Recursion"
date:   2015-08-08 00:00:00
categories: tech
---
<h2>What is recursion?</h2>

As someone who is fond of math, the best way in which I can describe recursion is a sequence where the answer to the current problem depends on the answer from the previous problem. In other words, you are defining the problem in terms of itself. The loop can go on forever depending on the bounds. A popular example would be the [Fibonacci Numbers][math-world].

<h3>Why is coding recursion rare?</h3>

In most coding languages however, recursion seems to be less used as iteration is preferred. In order to understand why, I wanted to introduce the idea of [stack][stack-wiki]. Stack is a collection of elements in which the 2 main operations are pushing a element in and popping an element off. A call stack stores the subroutines of a program. When a program starts, there is a chunk of memory that is assigned to the stack. When that memory runs out, the program crashes from stack overflow. The most common cause of stack overflow is recursion. Since recursion is about the function calls on itself, there are cases in which it calls on itself so many times that the space required to store the variables and information associated with each call is too much. But it does need to be noted that the good thing about recursion is that it usually makes the code shorter and easier to read.

<h3>JavaScript Example</h3>

Below is an example of recursion where a function is written for factorial, `!`. The first part is defining that the factorial of 0 is 1. Other than that special case, the factorial of each number depends on the factorial of the integer prior. For example, 4! is actually (3! * 4).

{% highlight ruby %}
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
{% endhighlight %}

+ [University of Utah: School of Computing][cs-utah]
+ [Carnegie Mellon University: School of Computer Science][cs-cmu]


[math-world]: http://mathworld.wolfram.com/FibonacciNumber.html
[stack-wiki]: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
[cs-utah]: http://www.cs.utah.edu/~germain/PPS/Topics/recursion.html
[cs-cmu]: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Recursions/recursions.html