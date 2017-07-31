# AirBnB in React

## Step 1 create-react app

[Install create-react-app](https://github.com/facebookincubator/create-react-app)

Create an app by following the instructions there, and call your 
project directory airbnb.

We will spend some time at this point going over the structure of what 
create-react-app has built for you.

## Step 2

Create an experience component in src/App.js above your App component which was created for you by create-react-app.

Your Experience component will return a greeting, which you will replace with the AirBnB experience cards later.

```js
function Experience(props){
  return <h1>Hello, world!</h1>
}
```

## Step 3

On the App component that is provided, edit the returned markup to only return your Experience component.

```jsx
<Experience/>
```

## Step 4

Copy and paste this: 

<pre><code>
var sample_experience = {
  "img": "3c5d7f84-7934-40e7-83de-a822428d5202.jpg",
  "href": "https://www.airbnb.com/experiences/37820?source=p2&currentTab=experience_tab&searchId=9eb5daaa-81f8-42a7-a046-8afaf37668de",
  "price": "￥797",
  "desc": "Enjoy a decadent meal and after party at a secret venue"
 };
</code></pre>

into your App.js above your Experience component.

This is the sample data that you will use to test your component.

## Step 5: Use the sample data

Change the return value of the App component to use the sample data:

```
<Experience exp={sample_experience}/>
```

## Step 6: Use console.log

Inside of your Experience component, you will now have access to the sample data as props.exp.

Use console.log to find out what is inside of "props" inside 
of the Experience component.

```js
function Experience(props){
  console.log(props);
  [...]
```

You will find price, description, and image data is given inside the 
object. There's also an href, which we won't be using for this exercise.

Change your Experience component to return a <p> with the description 
from the desc property.

## Step 7 Finish the component

Add markup and do the same for the img and price properties as you did 
for the description.

At the end your markup will look something like the following:

<div>
  <p><img/></p>
  <p><span>￥797</span><span>Enjoy a decadent meal and after party at a secret venue</span></p>
</div>

Add the class names for the tags that you need to style.

In JSX you need to use <code>className="myclass"</code> instead of <code>class="myclass"</code> as you do in HTML. This is because "class" is a reserved word in JavaScript.

When you add the image tags, you will get the name of the image file from the props, but you need to create the full URL by adding this before:

<pre><code>
var img_location = "https://inimino.github.io/js-intro-exercises/airbnb/img/"
var image_file_name = ... // get the image file from props.exp
// in jsx
&lt;img src={img_location + image_file_name}>
</code></pre>

## Step 8

Once you have Experience rendering an individual card, then you need to 
change the data you are using to all the cards, and not just one.

Save the file from 
[experiences.json](https://inimino.github.io/js-intro-exercises/airbnb/experiences.json)
into your project as src/experiences.json

Find the import statements at the top of your App.js and add this one:

```js
import experiences from "./experiences.json";
```

This imports the JSON object in experiences.json into your app code as a 
variable.

In the real world, you would do a network request to get the experiences 
from a server, which we will be doing when we cover HTTP and AJAX.

Now, console.log the experiences object and make sure you have a big 
array of experiences.

In your App component, you will need to iterate over these experiences, 
and call the Experience component for each one.

Your App component needs to return a &lt;div> containing an 
&lt;Experience> for each one of the experience cards. You can do this 
using [the map 
method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Step 9

Add CSS to style your cards.
