/* JavaScript Foundations: Variables */

var color = "red";

var myDiv = document.getElementById('myDiv');
myDiv.style.background = "black";
myDiv.style.color = "#ffffff";

// Starts with A-Z a-z _ $
// Continue with A-Z a-z 0-9 _ $

// Valid Variables
var car = "Toyota";
var Color = "blue";
var _myVariable = "something";
var $specialName = 1;
var a58389 = "What is this?";


// Invalid Variable Names
// var 3colors = "red green blue";
// var winning% = 30;
// var person-name = "Jim";
// var @you = "are awesome!";

// Reserved words 
// var continue = true;



// var myVar;
// 
// // undefined = true; 
// 
// console.log(typeof myVar === "undefined");
// console.log(myVar === undefined);
// 
// var x = null;
// 
// 
// if(myVar == null){
//   console.log("If");
// } else {
//   console.log("Else");
// }


// Scope

// var world = "World!";
// 
// function sayHello () {
//   var hello = "Hello ";
//   
//   function inner () {
//     var extra = " There is more!"
//     console.log(hello + world + extra);
//   }
//   
//   inner();
// }
// 
// sayHello();
// 
// console.log("world outside sayHello(): ", world);
// // console.log("hello outside sayHello(): ", hello);



// Shadowing

// var myColor = "blue";
// console.log("myColor before myFunc()", myColor);
// 
// function myFunc () {
//   var myColor = "yellow";
//   var myNumber = 42;
//   console.log("myColor inside myFunc()", myColor);
// }
// 
// myFunc();
// console.log("myColor after myFunc()", myColor);
// console.log("myNumber after myFunc()", myNumber);


// Hoisting

/*function doSomething (doit) {
	var color = "blue", 
		number, 
		name = "Shane";
	
	if(doit) {
		color = "red";
		number = 10;
		console.log("Color in if(){}", color);
	}
	console.log("Color after if(){}", color);
}

doSomething(false);
doSomething(true);
*/


/*
// Included project file code below

function doSomething (doit) {
  var color = "blue",
      number,
      name = "Jim";
      
  if (doit) {
    color = "red";
    number = 10;
    console.log("Color in if(){}", color);
  }
  console.log("Color after if(){}", color);
}

doSomething(false);
doSomething(true);

// END included project file code
*/

/* JavaScript Strings */

var name = "Jim";
console.log(name);

var name2 = 'Jim';
console.log(name2);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said "This is Jim\'s string"';
console.log(statement3);













































