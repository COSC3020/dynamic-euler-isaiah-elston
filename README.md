# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number of $n$ terms in `code.js` for you. However, it does repeated work -- identify where the repeated work occurs and avoid it through bottom-up dynamic programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js` but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

### Answer

#### TL;DR

`e` $\in \mathrm{\Theta}(n)$

#### Reasoning

My implementation of `e` is comprised solely of constant factors. However, since it *is* recursive, it has to run all of those operations multiple times before the execution can cease. More specifically, it will run all of those operations until `n === 0`, where `n` represents the $n\text{th}$ value in approximating Euler's number.

The first call will have `n`, and then the second call will begin with `n - 1`, and then that pattern will continue until `n - n` $= 0$. That pattern is undeniably linear to the "size" of `n`, because as `n` gets larger `e` will have to decrement more times to reach `n` $= 0$. Therefore, we can conclude that the worst-case runtime complexity of `e` is $\mathrm{\Theta}(n)$.
