---
layout: reveal
---

---

# JavaScript

--

### <u>The</u> Client-side Programming Language

--

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

--

### JS Bin

[jsbin.com/?js,console](http://jsbin.com/?js,console)

--

### Outside the Browser

`node` can be used as an equivalent of `irb` and `ruby`.

```bash
$ node foo.js # Will execute the JS code inside `foo.js` (think `ruby foo.rb`)
$ node        # Gives you a REPL to execute JS code (like `irb` for Ruby code)
>
# Ctrl-D to exit
```

---

## Language Basics

--

### Types

Ruby

```ruby
"Hello Le Wagon"            # String

42                          # Fixnum
42.0                        # Float

true != false               # Boolean
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
"Hello Le Wagon"            // string

42                          // number
42.0                        // number

true != false               // boolean
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### More types

Ruby

```ruby
['Hello', 'Le', 'Wagon', 42]      # Array

{ name: 'bob', age: 42 }          # Hash with symbol as keys
{ 'name' => 'bob', 'age' => 42 }  # Hash with string as keys
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
['Hello', 'Le', 'Wagon', 42]      // Array

{ name: 'bob', age: 42 }          // Object
{ 'name': 'bob', 'age': 42 }      // Object (the exact same)
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### Variables

Ruby

```ruby
count = 12          # Assignment
count = count + 1   # Re-assignment
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
var count = 12;
count = count + 1;
/* Or */
let count = 12;
const count = 12;
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### `if`

Ruby

```ruby
if condition
  # [...]
end
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
if (condition) {
  // [...]
}
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### `for` (1)

Ruby

```ruby
10.times { |i| do_something(i) }

for i in 0...10
  do_something(i)
end
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
for (var i = 0; i < 10; i += 1) {
  doSomething(i);
}
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### `forEach`

Ruby

```ruby
beatles = %w(john paul ringo george)
puts beatles[0]

beatles.each do |beatle|
  puts beatle
end
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
var beatles = [ "john", "paul", "ringo", "george"];
console.log(beatles[0]);

beatles.forEach(function(beatle) {
  console.log(beatle);
});
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### [`Object.keys`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys)

Ruby

```ruby
instruments = { "john" => "guitar", "paul" => "bass", "ringo" => "drums", "george" => "guitar" }

instruments.each do |beatle, instrument|
  puts "#{beatle} played the #{instrument}"
end
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
var instruments = { "john": "guitar", "paul": "bass", "ringo": "drums", "george": "guitar" };

Object.keys(instruments).forEach(function(beatle) {
  console.log(beatle + " played the " + instruments[beatle]);
});
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### `while`

Ruby

```ruby
i = 0
while i < 10
  puts i
  i += 1
end
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
var i = 0;
while (i < 10) {
  console.log(i);
  i += 1;
}
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### Functions

Ruby

```ruby
def full_name(first_name, last_name)
  "#{first_name} #{last_name}"
end
```
<!-- .element: class="ruby-file" -->

JavaScript
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
```
<!-- .element: class="js-file fragment" data-fragment-index="2" -->

--

### Keywords

Ruby

```ruby
nil
self
```
<!-- .element: class="ruby-file" -->

JavaScript

```js
null
this
```
<!-- .element: class="js-file" -->

--

### Variable scope

```js
function concatenate(a, b) {
  var result = a + b;
  return result;
}

console.log(result)
```

```js
// ReferenceError: result is not defined
```
<!-- .element: class="fragment" data-fragment-index="2" -->

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

---

## Objects

--

### Built-in objects

```js
var firstName = String("boris");
```

Objects have properties.
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
firstName.length;
// => 5
```
<!-- .element: class="fragment" data-fragment-index="2" -->


[More built-ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
<!-- .element: class="fragment" data-fragment-index="2" -->

--

### Built-in objects (2)

```js
Math.random();
// => 0.555923983729
Date.now();
// => 1422875735069
```

--

### Using JavaScript with HTML

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <!-- Your content -->

    <!-- Your script tags here -->
    <!-- <script src="first_file.js"></script> -->
    <!-- <script src="other_file.js"></script> -->
  </body>
</html>
```

Loading a JS file is **blocking** the page rendering => Put it at the end.

---

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

---

# Further reading

 - [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [Google Style Guide (very long)](https://google.github.io/styleguide/jsguide.html)

---

# jQuery

A JavaScript library to ease your life.

--

### Cross-Browser Standardization

![]({% asset_path jquery/browser-war.jpg %})

---

## DOM

Document Object Model

--

[wikipedia.org/Tree_(data_structure)](https://en.wikipedia.org/wiki/Tree_%28data_structure%29)

![]({% asset_path jquery/tree.png %})

--

![]({% asset_path jquery/dom_example.png %})

--

![]({% asset_path jquery/request_0.png %})

--

![]({% asset_path jquery/request_1.png %})

--

When a browser displays a page, what happens?

 1. The HTML is fetched from the server
 2. The browser shows it to you

Between steps 1 and 2, something special happens.
<!-- .element: class="fragment" data-fragment-index="1" -->

--

The browser constructs a model of the document in memory, as a tree 
structure.
This model of the document is known as the Document Object Model, or 
DOM.
When your JavaScript runs in a browser, you can access the DOM and 
manipulate it, to change the contents of the page.

--

The browser **parses** the HTML response and **creates** the DOM from it.

You can see the DOM in the browser developer tools.

--

![]({% asset_path jquery/inspect.png %})

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
convenient, so you may not need jQuery as much these days.

---

## React

 - Released at JSConf in 2013
 - developed and used by Facebook
 - React Native in 2015
 - one-way data flow, JSX, virtual DOM
 - Used by FB, Instagram, AirBnB, ...

---

## First usage : Manipulate the DOM

--

### The `$()` function


```js
$('div')                   // finds every <div> in the page
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```js
$('.hello')                // finds every tag with a "hello" class
```
<!-- .element: class="fragment" data-fragment-index="2" -->

```js
$('#wagon')                // finds the one element with id="wagon"
```
<!-- .element: class="fragment" data-fragment-index="3" -->

```js
$('td.title > a')          // any CSS selector will do
```
<!-- .element: class="fragment" data-fragment-index="4" -->

Find all <!-- .element: class="fragment" data-fragment-index="4" -->[selectors on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
<!-- .element: class="fragment" data-fragment-index="4" -->

--

The `$(selector)` methods return a **jQuery object** containing

a **collection** of DOM elements.

This collection can contain **zero**, **one** or **many** elements.

```js
$('body').length
// => 1

$('a').length
// => 24
```

--

If you matched several elements, you can loop with [`$.each()`](http://api.jquery.com/jquery.each/)

```js
$('a').each(function(i, item) {
  console.log($(item).attr('href'));
});
```

**DO NOT use `forEach`** here, `$(a)` does not return a regular array.

```js
// As a reminder, use forEach for regular arrays.
var beatles = [ 'john', 'paul', 'ringo'];
beatles.forEach(function(beatle) {
  console.log(beatle);
});
```
<!-- .element: class="fragment" data-fragment-index="2" -->

--

### Hide & Show elements

```html
<div id="wagon">
  Lorem ipsum...
</div>
```

```js
$('#wagon').hide();
$('#wagon').show();
```

Doc: [`hide`](http://api.jquery.com/hide/) and [`show`](http://api.jquery.com/show/)

--

### Add / Remove classes

```html
<ul>
  <li class="lead">Paul</li>
  <li class="lead">John</li>
  <li>George</li>
  <li>Ringo</li>
</ul>
```

```js
$('.lead').addClass('bold');
```

Doc: [`addClass`](http://api.jquery.com/addClass/), [`removeClass`](http://api.jquery.com/removeClass/)
and [`toggleClass`](http://api.jquery.com/toggleClass/)

--

### Read/Write inputs

```html
<!-- Some HTML -->
<input name="email" id="email" value="bob@sponge.com" />
```

Read

```js
var email = $('#email').val();
// => 'bob@sponge.com'
```

Write

```js
$('#email').val('patrick@star.com');
```

--

### Extract text

```html
<!-- Some HTML -->
<a href="http://www.lewagon.org" id="home">Le Wagon <em>rocks</em></a>
```

Read

```js
var content = $('#home').text();
// => 'Le Wagon rocks'
```

--

### Read/Write HTML

```html
<!-- Starting HTML -->
<div id="intro">
  Hello guys
</div>
```

```js
$('#intro').html('<a href="http://www.lewagon.org">Le Wagon</a>')
```

```html
<!-- Result HTML -->
<div id="intro">
  <a href="http://www.lewagon.org">Le Wagon</a>
</div>
```

Difference between `.text()` and `html()`: [check this out](http://jsfiddle.net/hossain/sUTVg/)

--

### Create new elements

```js
var paragraph = $('<p>').text("Hello I'm new here");

$('body').append(paragraph);
```

```html
<!-- Result HTML -->
<body>
  <p>Hello I'm new here</p>
</body>
```

---

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
   - [here](https://play.inimino.org/~inimino/mkh-ifb-uga-bqp)

--

## Exercises

  - [https://inimino.github.io/js-intro-exercises/](https://inimino.github.io/js-intro-exercises/)

--

## Happy Hacking!
