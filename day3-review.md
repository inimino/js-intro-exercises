## JavaScript

- callback functions

Some_API.register(callback) // register your callback

function callback(){
	do_something_else() // this code will run when something happens
}

- Objects

Objects have properties.

var obj = {some_property_name:"Property Value"}

var person = {last:"Clement",first:"Michaeljohn"}

person.first
person['first']

var property_name = 'first'

person[property_name] === person['first'] === person.first



- Arrays

var array = ["a",42,0,7,new Date(),function(x){return x*x}]

var simple_array = ["string","another string"]

simple_array[0] === "string"

var arr_of_objs = [{x:"y"},{x:"z"},{x:"a"}]

"a" === arr_of_objs[2].x

arr_of_objs.length === 3

arr_of_objs[arr_of_objs.length-1]

## jQuery


The dollar sign. $()

$ === jQuery

$('.logo').on('click',callback)

var jQuery_object = $('#some_id')



## DOM

What is the DOM?

A big tree.

A hierarchical representation of your markup.

The browser's idea of your HTML in memory.

Events

var element = document.querySelector('#some_id')

element.addEventListener('click',callback)

els = document.querySelectorAll('p')

els.lastChild
