// Array Destructuring & Spread Operator

// Spread Operator
/*
    Spread Operator pulls out all elements of an array and gives you a standalone list of them.
        * Denoted by ...
        * Must be inserted into a new array [...]
        * Spread operator unpacks the values from one array or object into another.
        * Add values to original array without affecting its copy.
        * Copy modification does not affect the original.
*/

let fullName = ["Paul", "Niemczyk"]
console.log(fullName)

// This causes fullName array to be nested inside of a tempArr array.
// let tempArr = [fullName]

let tempArr = [...fullName]
fullName.unshift("Professor")
console.log(fullName)
console.log(tempArr)

// We can use multiple spread operators to unpack multiple arrays into a new array.

let birthPlace = ["London", "England"]

let nameBirth = [...fullName, ...birthPlace]
console.log(nameBirth)

// ... & Numbers

console.log(Math.min(1, 5, -3))

let prices = [10.99, 2.99, 5.83, 27.99, 6.58]
// This fails because an array is NotANumber
console.log(Math.min(prices), typeof prices)

console.log(Math.min(...prices))

// ... & Objects

let persons = [{name: "Paul", age: 25}, {name: "Anne", age: 20}]
// console.log(persons)

let copiedPersons = [...persons]
// console.log(copiedPersons)
persons.push({name: "Freya", age: 21})

/*
Any changes we make to the persons or copiedPersons when modified, accesses the reference value in the memory. For that reason any changes made to either persons or copiedPersons will be reflected in its counterpart.
*/
// copiedPersons[0].name = "Mike"
// persons[0].name = "Kayce"
console.log(persons)
console.log("----------")
console.log(copiedPersons)

// How do we avoid changing original and copied array?
// Make sure to return new objects with their own memory space.

let newPersons = persons.map(person => ({
    name: person.name,
    age: person.age
}))
newPersons.push({name: "Kayce", age: 21})
newPersons[0].name = "Henry"
console.log("==========")
console.log(newPersons)
/*
    JavaScript has 5 primitive data types:
        * boolean
        * null
        * undefined
        * string
        * number
    These data types are assigned to a value

    Three data types passed by reference:
        * array
        * function
        * object
    Non-primitive data types contain a reference to a value. The reference points to the objects location in memory. Variables don't contain the value.
*/

let x = 10; // MEMORY: Variable x Value 10
let y = "abc" // MEMORY: Variable y Value "abc"

let a = x
let b = y

console.log(x, y, a, b)

let arr = []  // Create an array in memory. Arr receives the address location of that array somewhere in memory.

arr.push(1)

/*

    VARIABLE        VALUE       ADDRESS     OBJECT
    arr             <#001>      #001        [ ]
    arr             <#001>      #001        [ 1 ]

*/

let reference = [1];
let refCopy = reference

/*

    VARIABLE        VALUE       ADDRESS     OBJECT
    reference       <#001>      #001        [ 1 ]
    refCopy         <#001>                  
    
*/

reference.push(2)
console.log(reference, refCopy)

/*

    VARIABLE        VALUE       ADDRESS     OBJECT
    reference       <#001>      #001        [ 1, 2 ]
    refCopy         <#001>
    
*/

let myObj = {
    name: "Paul",
    age: 25,
    lives: "Indy"
}

console.log(myObj.name)

let newObj = myObj

newObj.name = "John"
console.log(newObj.name)
console.log(myObj.name)

/*

    VARIABLE        VALUE       ADDRESS     OBJECT
    myObj.name      <#001>      #001        "Paul" ==> "John"
    newObj.name     <#001>                  
    
*/

// How to clone objects in JS

let ourObject = {
    name: "Anne",
    age: 22
}

// Utilize Object constructor

let copiedObject = new Object(ourObject)
console.log(copiedObject)
// ourObject.name = "Paul"
console.log(copiedObject)

// Utilize Spread Operator
let copiedUsingSpread = {...ourObject}
console.log(copiedUsingSpread)
copiedUsingSpread.name = "Testing"
console.log(copiedUsingSpread)
console.log(ourObject)

// Array Destructuring

/*
    Array Destructuring allows you to unpack values from arrays, or properties from objects --> into distinct variables.
        * Similar syntax as array literal
        * Left hand side of assignment operator
        * Used to unpack array/object into distinct variables
*/

let cities = ["Boston", "New York", "Chicago", "LA"]

// let boston = cities[0]
// console.log(boston)

/*
    JS unpacks the values from cities array and assigns each value its own variable based on their original position in an array.
*/
let [boston, newYork, chicago, la] = cities
console.log(boston)
console.log(newYork)
console.log(chicago)
console.log(la)

// Rest Syntax

/*
    Rest looks just like Spread syntax. Spread expands an array.
    Rest collects multiple elements and condenses them into one.
*/

let cars = ["Porsche", "BMW", "Maserati", "Aston Martin", {transmission: "manual", year: 2012, wheelsDriven: "rwd"}]

let [porsche, bmw, ...otherInfo] = cars
console.log(porsche, bmw)
// otherInfo becomes an array of the rest of the elements of cars.
console.log(otherInfo)

// How to skip values using rest operator.
// Rest operator must be the last element defined.
let [brand, , , ,...features] = cars

console.log(brand, features)

// Challenge
/*
    Create an array called statesVisited wih a list of states you've been to.

    Create an instance of that array called statesCountries and unpack all of the array values of statesVisited inside it. Now add additional countries to which you have been (if none, add ones that you intend on visiting).

    Now unpack each individual state into its own variable, and unpack all of the countries into its own 'countries' variable.

*/

let statesVisited = ["California", "Colorado", "New Mexico"]

let statesCountries = [...statesVisited, "Germany", "Israel"]
// console.log(statesCountries)

statesCountries.push("England")
console.table(statesCountries)

let [california, colorado, newMexico, ...countries] = statesCountries

console.log(california, colorado, newMexico, countries)