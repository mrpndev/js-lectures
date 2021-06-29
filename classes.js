// Classes

/*
    Templates for creating objects. They encapsulate data with code. JS is a heavily prototype-based OOP language.

    Classes are considered special functions and therefore can be defined as:
        - Class Expression
        - Class Declaration
*/

// Class Declaration
// Class name should always be capitalized
// Function declarations are hoisted. Class declarations ARE NOT.

class Teacher {
  // constructor - a class method for creation and initilization of a class object.
  constructor(name, subject, tenure, isPolyglot) {
    this.name = name;
    this.subject = subject;
    this.tenure = tenure;
    this.isPolyglot = isPolyglot;
  }
}

// Instantiating a Class Declaration

let pNiemczyk = new Teacher("Paul", "Coding", 1, true);
pNiemczyk.subject = "Math";
// console.log(pNiemczyk)

// Creating objects for every teacher is laborious.
// Class gives us an easy template to reuse over and over again.

let teacher = {
  name: "Paul",
  subject: "Coding",
  tenure: 1,
  isPolyglot: true,
};

// console.log(teacher.name)

// Class Expression

let House = class {
  constructor(address, bedrooms, bathrooms) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
};

// Creating an instance of Class Expression

let parkAve401 = new House("401 N Park Ave", 2, 2);

console.log(parkAve401);

// Class Methods
/*
    Method is a function that lives inside of a class that can be reused on any class instances.
*/

class Car {
  constructor(make, model, year, transmission) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
  }

  // Method
  greetDriver() {
    console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`);
  }

  age(currentYear) {
    let result = currentYear - this.year;
    return `Your car is ${result} years old.`;
  }
}

let porsche = new Car("Porsche", "911", 2018, "manual");

console.log(porsche.greetDriver());
console.log(porsche.age(2021));

// Challenge
/* 
Create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie.

Create an instance of that object with the superhero name and its properties.

? Create a method that console logs the name and keyMovie together.

! SPICEY MODE
! Create a method that takes the name of the superhero and checks it against two arrays. One with Team Cap and one with Team Tony and returns which team the superhero was a part of during Civil War.

* Be done by 11:26
*/

class Avengers {
  constructor(name, superpower, age, isDead, keyMovie) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.isDead = isDead;
    this.keyMovie = keyMovie;
  }

  movieStarred() {
    return `${this.name} starred in ${this.keyMovie}`;
  }

  whichTeam() {
    let teamCap = [
      "Steve Rogers",
      "Captain America",
      "Bucky",
      "Wanda",
      "Hawkeye",
      "Ant Man",
    ];
    let teamStark = [
      "Tony Stark",
      "Vision",
      "War Machine",
      "Black Panther",
      "Black Widow",
      "Natasha Romanoff",
    ];
    if (teamCap.includes(this.name)) {
      return `${this.name} is Team Captain`;
    } else if (teamStark.includes(this.name)) {
      return `${this.name} is Team Stark`;
    } else {
      return `${this.name} is not in our database.`;
    }
  }
}

let captainAmerica = new Avengers(
  "Steve Rogers",
  "Captain obviously!",
  150,
  true,
  "Captain America"
);

let blackWidow = new Avengers(
  "Natasha Romanoff",
  "she's a badass!",
  32,
  true,
  "Iron Man 2"
);

console.log(captainAmerica);
console.log(captainAmerica.movieStarred());
console.log(captainAmerica.whichTeam());
console.log(blackWidow);
console.log(blackWidow.whichTeam());
console.log(blackWidow.movieStarred());

// Inheritance
// Extends
/*
    Extends creates a class that is a child of another class.
    Syntax:
        class ChildClass extends ParentClass {
            constructor(params of parent & child) {
                super(params of parent)
                this.childProperty = childProperty
            }
        }
*/

class Options extends Car {
  constructor(
    make,
    model,
    year,
    transmission,
    isLeather,
    isComfortAccess,
    wheelsPowered
  ) {
    // super inherits constructors of the parent class
    super(make, model, year, transmission);
    this.isLeather = isLeather;
    this.isComfortAccess = isComfortAccess;
    this.wheelsPowered = wheelsPowered;
  }

  isCPO(currentYear) {
    let result = currentYear - this.year;
    return result >= 6
      ? `Your ${this.model} is out of warranty`
      : `Your warranty is still good.`;
  }
}

let bmw = new Options("BMW", "M5", 2016, "DCT", true, true, "RWD");

console.log(bmw.age(2021));
console.log(bmw.isCPO(2021));

class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()} - ${
      months[this.getMonth()]
    } - ${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("June 29, 2021 12:15:00").getFormattedDate());

let whatever = new Date();

console.log(whatever.getMonth());

// Challenge
/* 
Extend the House class with one called Sale. Sale should have properties of appraisalValue (int), listPrice (int), agent (str), and isListed (bool)

Create a method which calculates the difference between appraisalValue and the listPrice. Add a conditional that will check if list is 20% higher than appraisal. If it is, say, it's north it. If it isn't, say it's a good value.

The return should also include the difference between the two values.

! Be done by 1:47
*/

class Sale extends House {
  constructor(
    address,
    bedrooms,
    bathrooms,
    appraisalValue,
    listPrice,
    agent,
    isListed
  ) {
    super(address, bedrooms, bathrooms);
    this.appraisalValue = appraisalValue;
    this.listPrice = listPrice;
    this.agent = agent;
    this.isListed = isListed;
  }

  valueDifference() {
    if (this.appraisalValue <= this.listPrice) {
      let difference = this.listPrice - this.appraisalValue;
      let percentage = this.listPrice / this.appraisalValue;
      if (percentage >= 0.2) {
        return `The difference is ${difference} and it's 20% higher than appraisal.`;
      } else if (percentage < 0.2) {
        return `The difference is ${difference} and it's within range.`;
      }
    } else {
        return `You idiot! Are you seriously listing your house for less than it's worth? Get a new quote!`
    }
  }
}

let myHouse = new Sale("", 2, 2, 300000, 250000);

console.log(myHouse.valueDifference());
