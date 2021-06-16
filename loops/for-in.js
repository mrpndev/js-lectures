// For in Loop

/*
    For in loops work by looping over enumerable property names of an object.

    for (iterate in iterable) {
        code block to execute over each iterate
    }

*/

let teacher = "Paul Niemczyk";
let randomNums = [1, 5, 7, 22, 35, 129, 8]

let person = {
    name: "Paul",
    age: 25
}

// for (i in teacher) {
//     // (i - enumerable, teacher[i] - objects of enumerables)
//     console.log(i, teacher[i])
// }

for (i in randomNums) {
    console.log(i, randomNums[i])
}

for (property in person) {
    //         (key      , value) of our object
    console.log(property, person[property])
}
