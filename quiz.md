## JavaScript Review

## Pure JavaScript

1. How do you write a function? Write a simple function named `square` 
   that takes a parameter `x`, and returns `x*x`.

```js
// write your function here






console.log(square(10)) // => 100
```

2. You are reading some code for a robot assistant that listens for voice 
   commands, like Siri or Alexa. What do you think the following code will do?
   Make your best guess:

```js
RoboticButler.listen(handle_command);

function handle_command(voice_command){
  console.log(voice_command);
}

do_something_else();
```

Which will happen first?

- the do_something_else() call
- the console.log() call

How many times will the console.log() line run?

- once
- never
- more than once
- any of the above
- impossible to say

The function `handle_command` would commonly be called what?

- a render function
- a callback function
- an immutable function
- a malfunction

3. What is the following thing called in JavaScript?

```js
var x = {};
// what kind of a thing is `x` here?
// yes it's a variable, but what is in it?
// what is `{}` an example of?
```

.

.

.

4. This code will print three lines to the console. What will it print?

```js
var files = {"app.js":"aaa",
             "README":"rrr",
             "style.css":"sss"};
var fname = "app.js";
var README = "hello";

console.log(files.README);
console.log(files[fname]);
console.log(files['style.css']);
```

.

.

.

5. Continuing the above, what will the following print? (Tricky!)

```js
console.log(files.fname);
console.log(files[README]);
```

.

.

6. Pat is writing code to find out how many new messages there are. 
   However, there always seems to be zero new messages. The following 
   code contains an error. What is it?

```js
var number_of_new_messages = 0;
MailAPI.getNewMail(function(new_messages){
  number_of_new_messages = new_messages.length;
});
// show how many messages were returned by MailAPI.getNewMail()
console.log(number_of_new_messages);
```

.

.

.

7. Continuing to debug, Pat adds a line:

```js
var number_of_new_messages = 0;
MailAPI.getNewMail(function(new_messages){
  console.log('length: ' + new_messages.length);
  number_of_new_messages = new_messages.length;
});
console.log('number: ' + number_of_new_messages); // show the count
```

  Pat finds that the length is logged as "length: 7" as expected, 
  because Pat knows there are supposed to be 7 new messages. However, 
  the number is still logged as "number: 0". What exactly is going on 
  here?
