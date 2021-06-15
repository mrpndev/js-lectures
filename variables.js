// Variables

/*

    - Primitive data type which can hold any type of value (object)
    - Begin with a declaration and can have values assigned, but not necessary.
    - Declarations are case sensitive. Student is not the same as student.
    - Preferrable variable naming convention is camelCase.
    - Variables may not begin with a number. They can begin with _ or $.
    - Default value for variable declaration is undefined.

*/

let student; // Variable Declaration
// New keyword introduced with ES6.
console.log(student)

student = "Jessica" // Assigned string value to variable student

console.log(student)

// Declaration = value
let homework = "Never"

console.log(homework)

var teacher; // Variable Declaration
// Old Keyword. Causes lots of headaches with scope and hoisting

const classroom = "Web Dev"; // Variable Declaration
// Declares a variable that may not be reassigned.
// Cannot be declared with undefined. Must have value attached.

console.log(classroom)

// console.log(classroom = "Math") will not work.

// Numbers

let myNum = 5;
let myFavNum = Number("5.0")
console.log(myFavNum)


