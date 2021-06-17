// Functions
/*
    Function is a block of code that can take in parameters (door), perform an action, and return the result of that action.
    There are two types of functions:
        - function declaration
        - function expression
            - arrow functions
    Functions have a default return statement of undefined unless otherwise specified.
*/

// Function Declaration

/*
    Declarations are hoisted. This is their template.
    function functionName(parameter) {
        block of code to be run
        return statement (not needed)
    }
*/

function funDeclaration() {
    // console.log("This is a function declaration.")
    return "This is a function declaration"
}

// Function will not run until it is called. Calling === Invoking.
// Parentheses immediately invoke the function. 
// funDeclaration()

funDeclaration() 

// let result = funDeclaration()
// console.log(result)

// Functions can have 0-inifinite amount of parameters.
// Parameters act as doors to let arguments inside of the function.

function greetUser(name) {
    return `Hello ${name}`
}
let userName1 = "Kinsey"
let userName2 = "Marshall"
let userName3 = "Jessica"

console.log(greetUser(userName1))
console.log(greetUser(userName2))
console.log(greetUser(userName3))

// Function Expression
/*
    Function expression utilizes a variable as a placeholder.
    Function expression is not hoisted.
*/

let myDog = function(name, breed) {
    console.log(`${name} is a ${breed}`)
}

console.log(myDog)

// Arrow Function
/*
    Introduced in ES6 
    More concise way of writing functions
    Arrow functions are created using function expression ONLY
*/

// Concise Body Arrow Function
// Can only have one parameter if it's not enclosed by ( )
let greeting = () => console.log(`Hello friend`)

greeting("Paul")

// Block Body Arrow Function

let sendEmail = (email, name) => {
    return `Hello ${name}:
    
    We have been trying to reach you about your car's extended warranty.
    
    Is this email, the correct email for you? ${email}
    
    Sincerely,
    
    Annoying people.`
}

console.log(sendEmail("pniemczyk@elevenfifty.org", "Paul"));

// Immediately Invoked Function Execution
/*
    Function declarations that have no name and are immediately invoked.
*/

(function () {
console.log("IIFE")
})();

// Function return statements
// Must always return only one value

function returnFun(x, y) {
    // return x, y returns 5 because return must only have one value
    return [x, y]
    // let mySet = new Set Über spiceh!
    // mySet.add(x)
    // mySet.add(y)
    // return typeof mySet
}
console.log(returnFun(2, 5))

// Challenge
// Create a function declaration named tipCalculator which takes the pre-tax bill, the sales tax, and the tip percentage and returns the tip amount.

// function tipAmount(bill, salesTax, tipPercent) {
//     let taxAmt = bill * (salesTax/100)
//     let totalBill = bill + taxAmt
//     let totalTip = totalBill * (tipPercent/100)
//     let billTotal = totalTip + totalBill
//     return `Your bill total is ${billTotal} of which the tip is ${totalTip}`
// }

// Arrow function version
let tipAmount = (bill, salesTax, tipPercent) => {
    let taxAmt = bill * (salesTax/100)
    let totalBill = bill + taxAmt
    let totalTip = totalBill * (tipPercent/100)
    let billTotal = totalTip + totalBill
    return `Your bill total is ${billTotal} of which the tip is ${totalTip}`
}

console.log(tipAmount(100, 7, 20))

/*
    Create a function of your choice (Declaration or Expression) named capitalizeName which takes one parameter. It then capitalizes the first letter of the name and returns the full name to you.
*/

function capName(name) {
    let lowerName = name.toLowerCase()
    // console.log(lowerName)
    // ! these console.logs allow us to see very step of the way.
    let fLetter = lowerName[0].toUpperCase()
    // console.log(fLetter)
    return fLetter + lowerName.slice([1])
}

function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice([1]).toLowerCase()
}
console.log(capitalizeName("PAUL"))
// console.log(capName("paul"))

// Extra Spicy Challenge
// Create a function which reverses a string using recursion. (Ouch!)

function revStr(str) {
    return (str === "") ? "" : revStr(str.substr(1)) + str.charAt(0);
}

console.log(revStr("paul"))











