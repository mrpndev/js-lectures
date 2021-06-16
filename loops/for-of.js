// For of Loop

/*
    For of loop iterates over property values.
    Better suited for arrays and strings when values are needed.

    for (iterate of iterable) {
        block of code to execute on each iterate run
    }

*/

let classmates = ["Kayce", "Alex", "Jessica", "Jacob", "Freya"]

// for (student of classmates) {
//     console.log(student)
// }

let myText = "This is my sample text."

for (letters of myText) {
    console.log(letters)
}

let person = {
    name: "Paul",
    age: 25
}

// for (i of person) {
//     console.log(i)
// }

for (i of Object.entries(person)) {
    // for in loop better suited
    console.log(i)
}

for(let [k, v] of Object.entries(person)) {
    // for in loop better suited
    console.log(`${k}: ${v}`)
}