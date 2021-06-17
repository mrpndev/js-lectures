// Scope & Hoisting

/*
    Scope determines how different blocks of code can be accessed.
    Three types of scope:
        - Global
        - Block or Local
        - Function
*/

// Global scope
/*
    Our JS file, or Window object in terms of browser.
    Accessible from every other scope
*/
let x;
console.log(x)
function addOne() {
    x = 1
}
addOne()
console.log(x)

// Function scope
// Can be accessed inside the function only!
function carName() {
    let name = "Maserati"
    var model = "GranTurismo"
    if (true) {
        // Block scope
        // let will not let you console.log outside this scope
        // it is scoped to the enclosing block
        // let year = 2013
        var year = 2013
        // var will let you console.log
        // scoped to enclosing function
    }
    console.log(year)
    // console.log(name)
}
carName()
// console.log(name)

// Let/Const vs Var
/*
    Let is scoped to the immediate enclosing block of code. Let is NOT hoisted.
    Var is hoisted and scoped to the immediate function block
*/

{
    // Block scope
    // let blockScopeVariable = "Block scope"
    // ReferenceError scoped to this block
    var functionScopeVariable = "Function Scope Var(iable)"
}

// In this instance function scope == global scope
console.log(functionScopeVariable)

// Hoisting
/*
    JS is an interpreted language that is being read top to bottom and left to right. The parser which reads the code goes over it twice. First, to hoist or assign memory location to ALL VAR(iable) declarations as well as Function Declarations. During the second pass, the interpreter actually reads the initiliazation values and expressions that we have assigned, and executed our code.
*/

let y;
console.log(y)
// 1. y gets declared and assigned a value of undefined
// 2. console log reads the undefined value

// Code below results in an error because let does not get hoisted.
// console.log(z)
// let z;

// This works because var gets hoisted first, before console.log executes.
console.log(a)
var a;

// First console.log returns undefined because cheese is hoisted
console.log(cheese)
var cheese = "Gouda";
// Second console.log returns "Gouda" because hoisted declaration has been reassigned the value on line 80.
console.log(cheese)

// Hoisting & Function Declaration vs Function Expression

// This is a function declaration.
// Invoking the function before creation will work because function declaration is hoisted.
helloWorld()
function helloWorld() {
    console.log("Hello World from the Hoisting Side! - Adele")
}
// This is a function invokation
// helloWorld()

// addNums(5, 5)
// Will not work because fx expressions are NOT hoisted.
let addNums = function(x, y) {
    console.log(x + y)
}
// Works (10) because function expression is created, then invoked.
addNums(5, 5)

// Arrow functions as derivatives of fx expressions are also NOT hoisted.

// Extra credit showing where to use fx expression vs fx declaration

let arr = ["Paul", "Jessica", "Marshall", "Alex", "Foluso", "Dakota"]

arr.map(value => console.log(value))
// More performant and more elegant

arr.map(function(value) {console.log(value)})
// Looks like a brick hit it & slow

