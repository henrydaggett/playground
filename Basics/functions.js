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
