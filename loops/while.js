// While Loops

/*
    While statement creates a loop so long as the condition we've specified returns true.

    while (condition) {
        code statement
    }

    To stop a while loop from executing, the condition must at one point return false.

*/

let count = 0; // 1 2 3 100

while(count <= 100) {
    console.log(count)
    count += 1
}

while(true) {
    console.log("This is an infinite loop without break")
    break
}

// Challenge

// Fizz Buzz + Loops
// Create a loop which will iterate over numbers from 100 - 500.
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of 3 and 5, print "Fizz Buzz"
// If it's not multiples of 3 and 5, print the number itself.
// Utilize standard for loop first

for (i = 100; i < 501; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz")
    } else {
        console.log(`${i} not divisble by either number.`)
    }
}






