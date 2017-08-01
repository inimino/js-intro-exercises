## Step 1: sign up for the API

https://www.apixu.com/

get API key

## Step 2: Create your app

Create a new project in your `code` folder.

Name it `weather`.

    cd ~/code
    create-react-app weather

Get Sublime Text open and notice the directory structure is the same, 
with src/App.js and our other friends from the create-react-app 
structure.

## Step 3: Clean up the default UI

Inside the App component that create-react-app made for you there is a 
lot of existing UI which you want to clean up so you can build your own 
UI.

Delete everything that is being returned from your App component except the outer div.

    return (
      <div className="App">
      </div>
    );

## Step 4: Add an input

We want to let the user choose a city and we will then look up the 
weather for that city.

We need an input element for the user to type in the city name.

- Create a function `city_input_changed` inside the render() function of 
  the App component, but after the `return` statement.
- Add an `<input/>` element inside the markup that you return from your 
  App component.
- Your input element will have an `onChange` property to call the 
  function whenever the user types anything into the input box. You 
  need to use curly braces in the JSX to refer to the function by name.

## Step 5: Store and show the City

Add a variable to hold the city name at the top level of your file, 
before the App component. You can call your variable `city` and give 
`"Shanghai"` as a default value.

The `city_input_changed` function will be called with an argument which 
is the `Event` that was fired by the input. You need to make sure that 
your function has a parameter for this, you can call it `e` or `event` 
as we have been doing.

In your function, update the `city` variable using the `event.target.value`.

In the JSX returned from your App component, display the `city` 
variable.

## Step 6: Add a button to lookup the weather

Once your user has typed in their city, they are going to click a button 
to look up the weather using the Apixu weather API.

Add a button below your input, using an `<input type="button" value="Get 
Weather"/>`.

You need an onClick property for the button, which will be called when 
the button is clicked. Create another function `get_weather_data` and 
set it as the onClick property of the `Get Weather` button.

Your `get_weather_data` is going to ... get the weather data. But let's 
not get ahead of ourselves. Before we do the API request, we'll make 
sure we have the right URL to use.

Check [the API docs](https://www.apixu.com/doc/request.aspx) for the API 
you are using.

You will need to put your API key into the URL, otherwise your request 
will be denied. You'll also need to pass the city in, and use the 
correct endpoint to get the current weather.

Put your API endpoint into a variable `API_BASE`, and put your API key 
into a variable `API_KEY`. Put these two functions at the top of your 
file, near the `city` and `weather_data` variables.

Inside your `get_weather_data` function, take the API base URL, the API 
key, the `city` name from your `city` variable, and concatenate them all 
into a `url` variable, and use `alert()` or `console.log()` to display 
this variable.

When you get the URL from your `alert` then you can copy and paste that 
URL into a new tab in your browser, or test it with `curl https://...` 
and see if it works. If it doesn't work, check the API docs and fix your 
code until you have a working URL that is returning your weather data 
from the API. You cannot go on to the next step and use `Fetch` until 
you know you have the right URL for the request.

## Step 6: Do the actual GET request

Inside your `get_weather_data` function, you now are building the 
correct URL, so let's fetch that weather data!

Use `fetch()` to GET the response and get the JSON from the response. 
You will use `.then` since the Fetch API uses promises, once for the 
response and once again for the JSON in the response body.

Inside your final `.then`, when you have the JSON data, log it to the 
console with `console.log()`. When you see correct data being logged to 
the console, go on to the next step.

## Step 7: Make and show a variable to store the weather data

Now we want to use the weather data inside the App component.

First, add a variable, below your `city` variable, for the 
`weather_data` and set this variable to an empty object as a default 
value. This variable is going to hold the weather data, just like the 
`city` variable holds the city.

Before we store anything in this weather data variable, it's just an 
empty object. Let's put the contents of that object directly in our App 
UI so that we can see it change when we have access to the real weather 
data.

In your `render()` function, inside the `div` that you are returning, 
add a `<p>{JSON.stringify(weather_data)}</p>`.

You should see an empty object, displayed as JSON, so just an empty pair 
of curly braces, in your UI. Of course we don't want to have raw data 
like that displayed to our users, but this step is going to help us 
finish the next step.

## Step 8: Store the real weather data and forceUpdate()

In the `render` function, before the `return` statement, add a line `var 
self=this;`.

Inside your `fetch()` callback, where you were `console.log()`ing the weather 
data, assign it to `weather_data`, and then add a call to `self.forceUpdate()`.

Now, when you enter a city and click the button, you should see the full 
weather data as a big ugly JSON string right in your UI.

In case you are curious, what we are doing here is saving the App instance 
which is given to us as `this` inside the `render` function in a variable 
`self` so that we can use it later inside our callback function, and then using 
`self.forceUpdate()` to make the App component update itself once we have 
changed the `weather_data`.

## Step 9: Build the real UI!

Now you have your ugly JSON object, which is some kind of very primitive weather UI for people who can read JSON, but let's make a real UI for normal humans.

Use what you have learned about JavaScript to pull the data you like out of the big JSON data object, and display it using appropriate tags like `<p>` and `<div>`. You should start by showing at least the city name, the current temperature, the current condition, such as "sunny" or "partly cloudy". Note that there is an `icon` given which is a URL to a PNG image that you can even use to represent the current conditions graphically.

Once you have some markup, you can delete your `<p>{JSON.stringify(weather_data)}</p>` and add some CSS to style your UI.
Your CSS belongs in `src/App.css`.

Make a nice mobile-friendly layout, and make it look good.

## Step 10: Extended forecast

Now that you're displaying the current conditions, you have a pretty usable weather app, but these apps usually show the forecast, too.

Check the [API reference](https://www.apixu.com/doc/forecast.aspx) and see how to do an API request for the weather for tomorrow or the next day.

You already have a button that gets the current weather conditions, so add a button that gets the forecast for today, and display that instead.
You could show the temperature predictions hour by hour, or even day by day for the next few days.

Don't be afraid to play with the API itself a bit and see what kind of data you can get, and then build a UI around what you find.

Congratulations, you've now built your first complete and useful app with React!

Happy forecasting!

## Bonus option

Add Air Quality Index and PM2.5 data. You'll need to find and use another API for this!
