// "use strict";

// a();
// b(); will give error nothings saved in it as per hoisting

// function statement or declaration
// function a() {
//   console.log("a function");
// }

// function declaration
// var b = function () {
//   console.log("b function");
// }

// b();      // this will work because we called it after going through all the lines necessary

// anonymouse functions
// a function which does not have a name like in line 10

// named function expression
// var c = function named() {
//   console.log("This is a named function");
// }
// c();
// named() function will not work because it is still not defined 

// parameters and arguments
// parameters: function xyz(param1, param2) {}
// arguments: xys(param1, param2);

// first class functions (or citizens)
// the ability of functions as a value by functions is called first class functions


const radius = [3, 1, 2, 4];

const area = function(radius) { return Math.PI * radius[i] * radius[i]; }

const circum = function(radius) { return 2 * Math.PI * radius[i]; }

const diameter = function(radius) { return 2 * radius[i]; }

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius));
    }
    return output;
};

// console.log(calculate(radius, area));

// console.log(calculate(radius, circum));

// console.log(calculate(radius, diameter));

// Array.prototype.calculate => this is also a method to create a generic function which can be used by all arrays by simply using <arr>.<function>
// ex: radius.calculate(<logic>)
// works like radius.map(<logic>)






/////////
// async function
// always returns a promise
// if returning a value. this function will return the value wrapped in a promise

// async function getData() {
//     return "KD";
// }
// const data = getData();
// console.log(data);


// await can only be used inside an async function

// promise for example
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise is resolved");
//     }, 5000);
// });

// async function
// async function handlePromise() {
//     const val = await p;
//     console.log("Await finished");
//     console.log(val);
// }
// handlePromise();



////////////////////////

// different promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
//   setTimeout(() => reject("P1 Fail"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
//   setTimeout(() => reject("P2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 2000);
//   setTimeout(() => reject("P3 Fail"), 2000);
});

// returns the results of all the promises if all are resolved
// if one or more promises are rejected, it returns the reason of the first promise that was rejected
// Promise.all([p1, p2, p3]).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// });


// returns all the results even if one or more promises are rejected
// they are returned in the form of an object with status and value or reason
// status: "fulfilled" or "rejected"
// value: <value> if fulfilled
// reason: <reason> if rejected
// Promise.allSettled([p1, p2, p3]).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//       console.error(err);
//   });


// returns the result of the first promise to be settled
// Promise.race([p1, p2, p3]).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//       console.error(err);
//   });

// returns the result of the first promise to be fulfilled
// if all promises are rejected, it returns an AggregateError
// Promise.any([p1, p2, p3]).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//       console.error(err);
//       console.error(err.errors);
//   });


/////////////////////

// this keyword
// global space: window object

/* 
this is the global space
whatever we write in the global space, it is part of the window object

*/

// console.log(this);  // window (global) object

// function x() {
	// the value depends on strict mode or not
	// in strict mode: undefined
	// in non-strict mode: window (global) object
	// console.log(this);
	// if the value of the this keyword is not set by the call, 
	// it defaults to the global object only in non-strict mode because of "this substitution"
// }

// strict mode from this line

// value of "this" keyword depends on how the function is called
// x();  // undefined in strict mode
// window.x();  // window (global) object in strict mode

// a function inside of an object is called a method
// const obj = {
// 	name: "KD",
// 	sayMyName: function() {
		// this will refer to the object itself
		// the value of the this keyword is the object in which it is present
		// console.log(this);
		// console.log(this.name);
// 	},
// };

// obj.sayMyName();

// call apply and bind

// const obj2 = {
// 	name: "Kunal",
// };

// obj.sayMyName.call(obj2);  // this keyword will refer to obj2

// usually we keep such fuctions outside of the object
// let printName = function() {
	// console.log(this);
// 	console.log(this.name);
// };

// printName.call(obj2);

// if the function has a parameter
// let printNameParams = function (greeting, message) {
// 	console.log(`${greeting} ${this.name}. ${message}`);
// };

// here the first parameter is the object to which "this" should point
// the rest are the parameters of the function
// printNameParams.call(obj2, "Hello", "Good Morning");

// apply is similar to call but it takes the parameters as an array
// printNameParams.apply(obj2, ["Hello", "Good Morning"]);

// bind returns a function with the "this" keyword bound to the object passed
// let printMyName = printNameParams.bind(obj2, "Hello", "Good Morning");
// console.log(printMyName);
// we have to call the function returned by bind
// printMyName();  // calling the function returned by bind


// arrow functions do not have their own "this" keyword
// they take the "this" keyword from their enclosing lexical context
// in this case it is the global object (window)
// const obj3 = {
// 	name: "KD",
// 	sayMyNameAgain: () => {
		// this will refer to the object itself
		// the value of the this keyword is the object in which it is present
		// console.log(this);
		// console.log(this.name);  // undefined
// 	},
// };

// obj3.sayMyNameAgain();

// example 2
// const obj4 = {
// 	name: "KD",
// 	sayMyNameAgainAgain: function() {
// 		const y = () => {	
// 			console.log(this);
// 			console.log(this.name);  // KD
// 		};
// 	y();
// 	},
// };

// obj4.sayMyNameAgainAgain();

// this inside DOM elements => reference to HTML element itself