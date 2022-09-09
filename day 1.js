//1)Difference between “ == “ and “ === “ operators.

// Both "==" and "===" are comparison operators that we use in javascript.Both returns only the boolean values.
// while "==" just compares the value of two variables ,"===" compares both value and the datatype of the variable.
// example--

let a=5;
let b="5";
console.log(a==b);//true
console.log(a===b);//false

//2)What is the spread operator?

// spread operators are used to copy array or object into other array or objects very quickly.It can pass a number of arrays as an 
// individual functional arguments.
// example--

let c=[1,2,3,4];
let d=[...c];
console.log(d);

//3)What are the differences between var, let and const?

// In JS,one can declare a variable using 3 keywords i.e,var ,let and const.
// var is the oldest keyword that was used in ES5 while let and const are newly introduced in ES6.
// var declaration is both in global and functional scope while let and const are in block scope only.
// In var,variable can be created and then initialize,in let variables can be created and then initialize while in const,creation and 
// initialization has to be done on the same line.
// In var,variable can be redeclared but not the same with let amd const.

//4)what is execution context?

// execution context is the environment where JS code gets executed.In execution context,js code gets parsed line by line 
// and the functions and variables are stored in the memory.
// there are 2 types of execution context-
// 1.Global execution context--IT creates a global object(window for browsers) and this object gets referenced by "this" keyword.
// this has 2 phases i.e,creation phase(memory allocation) and execution phase(code execution).
// 2.Function execution context--when we call a function ,then a function execution context is created.
// this again has creation phase and execution phase.

//5)What is meant by first class functions?

// When any function is treated like any other variable,it is known as first class function.for instance,function can be passed as an 
// argument to any other function,can be assigned to any variable and can be returned by any other function.
//example--

const foo=function(){
  console.log("foobar")
}
foo();//invoking the function using variable.