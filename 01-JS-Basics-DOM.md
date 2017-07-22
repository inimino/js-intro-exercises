# Introducing JavaScript

---

## History

--

May 1995.

Netscape wanted to make the Web more interactive, but needed something 
lighter than Java. They hired Brendan Eich.

--

"If you think back to the 1990s, JavaScript was cursed because it was 
mainly used for annoyances like little scrolling messages in the status 
bar at the bottom of your browser or flashing images. With JavaScript 
getting some evolutionary improvements through the standards process, it 
became fast enough and good enough in 2004 and 2005 to beget the Web 2.0 
revolution."

Brendan Eich, quoted in Charles Severance, "JavaScript: Designing a Language in 10 Days", Computer, Feb. 2012
--

 - 1997: ECMA-262 First edition
 - 1999: ECMA-262 Third Edition, ES3
 - 2009: Fifth Edition, ECMAScript 5 or ES5, added strict mode, JSON, 
   better specified
 - 2017: classes, modules, generators, promises, proxies, etc... current 
   version is officially ECMAScript 2017

--

## Build Tools

 - Babel
 - Webpack
 - module loaders, npm, TypeScript, etc.

--

Today, JavaScript is:

 - With HTML and CSS, a pillar of Web development
 - Increasingly popular on the backend
 - Usable for native apps, WeChat mini-programs, and more
 - Not as small a language as it used to be in ES3 days
 - Still small and comprehensible

--

"For the fifth year in a row, JavaScript was the most commonly used 
programming language." -- Stack Overflow survey

[https://insights.stackoverflow.com/survey/2017#most-popular-technologies]()


---

# Tools

 - JavaScript in the browser: use the console
 - Pure JavaScript: use Play or JSBin
 - Server-side: use Node

We will take a closer look at these tools later today.

---

# Further reading

 - [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [Google Style Guide (very long)](https://google.github.io/styleguide/jsguide.html)

---

## JavaScript and the DOM

--

When a browser displays a page, what happens?

 1. The HTML is fetched from the server
 2. The browser shows it to you

Between steps 1 and 2, some magic happens.
<!-- .element: class="fragment" data-fragment-index="1" -->

--

The browser constructs a model of the document in memory, as a tree 
structure.
This model of the document is known as the Document Object Model, or 
DOM.
When your JavaScript runs in a browser, you can access the DOM and 
manipulate it, to change the contents of the page.

--

JavaScript has no concept of input or output.

(Hence a "scripting" language.)

JavaScript has an event loop. Any input and output must be provided by 
the environment. In the browser, this means the DOM.

--

DOM methods were originally added at the same time as JavaScript itself.

Netscape and IE had their own APIs which often differed.

Standardization came gradually through the W3C.

--

## jQuery

 - released in 2006 by John Resig
 - Simplified handling DOM, AJAX, animations and events
 - smoothed over browser differences
 - still by far the dominant JS client-side library

Since 2006, native DOM APIs have gotten much more consistent and 
convenient, so you may not need jQuery these days.

--

## React

 - Released at JSConf in 2013
 - developed and used by Facebook
 - React Native in 2015
 - one-way data flow, JSX, virtual DOM
 - Used by FB, Instagram, AirBnB, ...

---

## Demo

Let's do some live coding with pure JavaScript (no DOM until tomorrow).

---

## JavaScript Basics

--

## Like Ruby, but different

Like Ruby, JavaScript has strings, numbers, while loops, functions.

Sometimes only the syntax is different.

Sometimes the JS way is entirely different.

--

## Ruby vs JS

```ruby
# comments start with hash (Unix tradition)
a = [1,2] # local variables created by assignment
# Ruby has "blocks" which are like inline anonymous functions
a.keep_if{|n| n > 1}
a.each {|n| puts n}
h = {} # Ruby calls this a "hash"
h['a'] = 42
h.each {|key, value| puts "#{key} #{value}" }
```

```js
// Comments start with two slashes
/* or surrounded by slash-star markers (C syntax) */
var a = [1,2] // variables must be declared
// using let, const, or var
// inline anonymous functions
var b = a.filter(function(x){ return x > 1 })
b = a.filter(x => x > 1) // ES6 arrow functions
var o = {} // this is called an Object, not a hash
o['a'] = 42 // this is a "property" of the object
o.a = 42 // this is equivalent
Object.keys(o).forEach(function(k){console.log(k+' '+o[k])})
Object.keys(o).forEach(k => console.log(`${k} ${o[k]}`)) // ES6+
```
--

## Further comparisons

 - [http://agentcooper.io/js-ruby-comparison/]()

--

## Tools

 - [JSBin](http://jsbin.com/)
 - [Node](https://nodejs.org/)
 - Browser console:
   - [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)
   - [Chrome](https://developers.google.com/web/tools/chrome-devtools/console/)
   - [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
 - [Play](https://play.inimino.org/)

--

## Types

 - Number
 - String
 - Boolean
 - Function
 - Object
 - Array
 - Symbol

Arrays and functions are actually Objects.

Symbols were introduced in ES6 aka ES2015.

--

## "Printf-style" debugging

Your first tool in times of trouble.

Two versions: alert() and console.log().

These are not part of the language, but are provided by the host 
environment (browser or Node).

--

## Live coding

 - Fibonacci function
   - control structures
   - functions
   - numbers

--

## Live coding

 - Beatles as an array
   - Arrays and strings
 - Beatles as an array of objects
   - Iteration over arrays
   - callback functions

--

## Live coding

 - simple clock
 - simple countdown
   - the "Hollywood principle"
   - the Date object

--

## Live coding

 - up/down counter exercise without DOM
   - event handling, the event loop

--

## Happy Hacking!
