console.log('It works!');

function doctorise(firstName) {
  return `Dr. ${firstName}`;
}

// anon function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// function expression
const doctorise2 = function (firstName) {
  return `Dr. ${firstName}`;
};

// arrow function
// function inchToCm(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// function inchToCm(inches) {
//   return inches * 2.54;
// };

// const inchToCm = function(inches) {
//     return inches * 2.54;
// };

const inchToCm = (inches) => inches * 2.54;

// if you have more than one param in your function then you need to use brackets arounf the params

function add(a, b = 3) {
  const total = a + b;
  return total;
}

// with arrow functions the name is inferred from the name of the variable, so in the below example you will call total(a,b) to get the function

const total1 = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE = Immidiately invoked Fuction Expression

// (function (age) {
//   return 'you are cool and `${age}`';
// })(10);

// Methods
const henry = {
  name: 'Henry Daggett',
  // this is a method: (had to comment it because eslint corrects it)
  // sayHi: function () {
  //   console.log(`Hi ${this.name}`);
  // },
  // Object short hand method:
  yellHi() {
    console.log('HI HENRY');
  },
  // Arrow function method:
  whisperHi: () => {
    console.log('hi henry');
  },
};

// Callback functions = something that will happen when something is done
