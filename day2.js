//What are closures? Give an example of closure

//A closure is a technique by which an inner nested function always has access to the variables and parameters of the outer function.
//basically,closure involves both the lexical scope and the black scope of the inner nested function.
//example---

function outer(){
    var counter=0;
    function inner(){
        counter+=1;
    }
    return inner;
}
var increase=outer();
alert(increase());//1
alert(increase());//2
alert(increase());//3

//Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind().

//These methods are used to bind a function to some object.
//bind()-it explicitely defines the value of "this" keyword when calling a function.bind() always returns a new function.
//call()-has same purpose as of bind() but call() also accepts additional arguments which are provided explicitely.
//apply()-call() and apply() has the same purpose.only difference is that apply() arguments need not to be passed explicitely but can be passed
//in the form of an array.
//exmaple-

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}
car.displayDetails();

var myCarDetails = car.displayDetails.bind(car); //bind
myCarDetails(); 

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.call(car, "Vivian");//call
displayDetails.apply(car, ["Vivian"]);//apply

//What is creation phase and execution phase?

//when js engine runs the js code,it creates an environment which is known as execution context.each execution context has two phases.
//1.Creation phase-in this phase,the global object i.e,window object for browser is created.this phase is also known as the memory allocation phase.
//variables are assigned menory and the initial value stored in then will be "undefined".definition of function is also stored.
//2.execution phase-in this phase,js engine runs the js code line by line.variables are assigned to their original values and function call happens.
//for each function,a separate function execution context is created.

//What are objects in javascript?

//An object is a non-primitive datatype which stores collection of related data in form of "key-value" pairs.every object has some properties and methods.
//it is a real-life entity.
//example-
var student={
    name:"MOHIT",
    class:"elevation academy",
    getName:function(){
        console.log(this.name);
    }
}
//here student is the object having properties like name and methods like getName.

//What are function constructors?

//Function constructor is used to dynamically create a function with help of "new" keyword.It takes a number of string arguments where the last argument is the body of the function.
//example-
    const add=new Function('a','b','return a+b');
    console.log(add(10,10));

//Explain prototypes.

//Prototypes are the objects that is associated with every function and object in js by default.we can also attach additional properties to prototypes.
//prototypes are used in js for mainly two things-
    //1.to implement inheritence
    //2.to access the properties and methods of an object.
//example-
function Person () {
    this.name = 'mohit',
    this.age = 22
}

const person = new Person();
console.log(Person.prototype); 

//What is prototype chain.

//when we try to access a property of an object in js,if that property is not found then it is searched in the objects's prototype.if still not found,then it is searched in the prototype's prototype.
//this process goes on until the property is found or we reach a prototype whose prototype is null.this linkage or chain is known as prototype chain.

//Give an example of inheritance using function constructor.

function Person () {
    this.name = 'John',
    this.age = 23
}
const person1 = new Person();
const person2 = new Person();

Person.prototype.gender = 'male';
console.log(Person.prototype);

console.log(person1.gender);
console.log(person2.gender);

//What are callbacks?

//callbacks are the functions which is passed as an argument to some other function.callbacks are mostly used in asynchronous js.
//example-
   function printA(){
    console.log("A");
   }
   function printB(){
    console.log("B");
   }
   printA();//A
   printB();//B
   printA(printB());//B A

//What is the use of setTimeout?

//setTimeout is the global method which executes a function after the specified time.it takes two arguments,1st is the callback function,2nd is the time in milliseconds.
//example-
function greet(){
    console.log("hello there");
}
setTimeout(greet,4000);//it will print hello there after 4second.

//What is an event loop and call stack?

//callstack is like a stack datastructure present in the js engine which works on the LIFO principle.it is used by js to keep track of the multiple function calls.
//Event loop in js engine monitors the callstack and callback queue.it checks if callstack is free or not.as soon as the callstack is empty,event loop pushes the items from callback queue to callstack.
