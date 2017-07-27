# JavaScript Day 3: React

---

## React

 - Announced at JSConf in 2013
 - used by Facebook, Instagram, AirBnB, many others
 - React Native in 2015
 - one-way data flow
 - virtual DOM
 - JSX

--

### Traditional Web App

 - Code runs on the server to create HTML.
 - The browser loads the HTML,
 - creates a DOM,
 - JavaScript changes the DOM in response to events
 - (network events or input events)
 - The user sees the changes without needing to refresh the page!

--

So the traditional flow is:

 - Data (on server) creates HTML
 - HTML is sent to browser
 - browser parses HTML and creates a DOM
 - browser shows the DOM on the screen
 - events happen, JavaScript runs,
 - the DOM is changed by JavaScript.

--

We can call this "jQuery + AJAX" style.

This works fine when there are only simple changes to the page after it 
has loaded.

However, for complex Web properties like Facebook, or for our 2048 game, 
almost everything on the page is dynamic, so...

--

### Unnecessary code!

We find that we are writing all the same code twice.

First we render the view on the server, with Ruby that generates HTML.

Then we render the view again on the client, with JavaScript and jQuery, 
whenever anything changes.

For sufficiently dynamic, AJAX-ified apps, anything on the page can 
change without reloading the page. So we end up writing basically 
all the server-side view code again on the client side.

--

### Solution: Write the view once

The approach we will take here is to write the view layer only once.

We write it in JavaScript, and we write it as a pure function that 
takes the data model as an input and produces our markup as output.

    function render(data){
      return '<div> Your entire view layer as HTML </div>'
    }

This is what we did with 2048 yesterday. However...

--

### Problem: Performance

This might work out alright for a small enough example like our 2048 
game, with a few dozen DOM elements at the most.

But imagine that we render the Facebook front page using this approach, 
and then a notification comes in from one of your Facebook friends, and 
we want to update a little element on the lower right to show that 
notification.

--

### Performance

To do that, we re-render the HTML for the entire page, and then 
completely replace the DOM for the whole page...

At that point we almost might as well just reload the whole page from 
the server.

The point of AJAX was to make the page more responsive...

It would be great if we could have the nice declarative style but still 
only update the parts of the DOM that actually need to be changed.

--

### The Virtual DOM

Instead of returning HTML as a string, we return "virtual DOM" objects. 
These are like regular DOM objects, for example, we have div, span, a, 
p, and so on, but instead of DOM objects provided by the browser, these 
are provided by React.

--

The only purpose of the virtual DOM is to be compared with the previous 
virtual DOM, and create diffs which can be applied to the actual DOM, 
without recreating everything on the page. This turns out to be much 
faster.

But how do we create those Virtual DOM objects?

--

### DOM

```js
var myDiv = document.createElement('div')
myDiv.className = "sidebar"
```

### React.createElement

```js
React.createElement('div', {className: 'sidebar'}, null)
```

### JSX

```html
<div className="sidebar"/>
```

--

### JSX looks like HTML, inside JavaScript

```js
const element = <h1>Hello, World!</h1>
```

In fact it is not exactly HTML, nor exactly JavaScript, but an extension 
to JavaScript, which gets compiled (by Babel) into the plain JavaScript 
that browsers understand. Specifically, into ES5.

--

### ES6 for free

Because we are using Babel to transform our JavaScript before sending it 
to the browser, we can also use new ES6 features, like arrow functions, 
even though many people are still using old browser that don't support 
these features natively.

---

## All about JSX

--

## All about JSX

For a more complete introduction, see the excellent React JSX 
documentation:

 - https://facebook.github.io/react/docs/introducing-jsx.html

--

## Basics:

 - Elements,
 - Components,
 - Properties

--

## Elements:

```js
const element = <h1>Hello, World!</h1>;

function user_greeting(user){
  return <h1>Hello, {user}!</h1>;
}
```

Note that "h1" is an ordinary HTML tag name.

--

## Components:

```js
function Greeting(){
  return <h1>Hello, World!</h1>; // h1 element
}

function Content(){
  // div element
  return <div>... the content of my app ...</div>;
}

function MyUI(){
  return (
  <div>
    <Greeting/> // component
    <Content/> // component
  </div>);
}

ReactDOM.render(<MyUI/>, document.querySelector('#container'))
```

--

Components are Capitalized to distinguish them from ordinary HTML elements.

Components are like UI building blocks that you can use and re-use to 
build apps.

--

## Properties:

```js
function UserGreeting(props){
  const user = props.user
  return <h1>Hello, {user}!</h1>
}

function lookup_logged_in_user(){return "inimino"}

var user = lookup_logged_in_user()

React.render(<UserGreeting user={user}/>, 
             document.querySelector('#root'));
```

---

## Putting it all together

--

### Demo: React Hello World

HTML + JSX

--

### Demo: React Hello {User} with Properties

--

### Demo: AirBnB with Search

Start 
[here](https://inimino.github.io/js-intro-exercises/airbnb/html.txt), 
images 
[here](https://inimino.github.io/js-intro-exercises/airbnb/img/ff3cf70d-7d4b-4b05-b617-5c01b972f33f.jpg).
