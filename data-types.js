// Data Types

/*
    There are six primitive data types in JS.
        - string
        - number
        - boolean
        - null
        - undefined
*/

// String

let myString = `this is a string`;
// Can use ' ', " ", or ` ` to encompass your string. Just be consistent

console.log(myString)

// String Concatenation

let san = "San";
let diego = "Diego"

console.log(san + " " + diego)

// Concatenation method
let concat_full = san.concat(" ", diego)

console.log(concat_full)

let longString = "This is a long string \n and I want it on multiple lines"

console.log(longString)

// Strings can be accessed by their index, using [] notation.

console.log(longString[4])

// Template literal or Template String
/*
    - Utilizes back ticks ` ` to allow us to contain placeholders.
    - Syntax for it is `string and a ${value}`
*/

let firstName = "Paul"

console.log(`Hello, my name is ${firstName}`)

// Numbers

let integer = 90;
console.log(integer)

let float = 5.6
console.log(float)

let rounded = 0.2 + 0.1
console.log(rounded) // Returns 0.30000000000000004

let strNumber = "125"
let strConvertedNumber = Number(strNumber)
console.log(strConvertedNumber)

// Literals
// Hardcoded values

let literalString = "literal string";
console.log(literalString)

// Can be created using constructors.
let constrLiteralStr = String("constructor string")
console.log(constrLiteralStr)

// Booleans

/*
    True or False values
        - Booleans have six primitive falsey values.
            - 0
            - Empty string " "
            - false
            - Undefined
            - Null
            - NaN (Not a Number)
        - Any other values in JS is considered truthy
*/

let trueValue = true
console.log(trueValue)
let falseValue = false
console.log(falseValue)

let truthy = Boolean(5)
console.log(truthy)

let falsey = Boolean(0)
console.log(falsey)


