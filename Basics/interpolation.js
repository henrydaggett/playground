function calculateBill(amount, people) {
  const total = amount / people;
  return total;
}

console.log(`Your total is £${calculateBill(100, 3)}`);

function taxMe(bill, taxRate) {
  console.log('This is calculating some magic!');
  const total = bill * (1 + taxRate);
  return total;
}

let HDbill = 100;
const HDtaxRate = 0.12;

console.log(`Your total is £${taxMe(HDbill, HDtaxRate)}`);

HDbill = 120;

function sayHiTo(firstName) {
  return `Hello ${firstName.toUpperCase()}`;
}

function sayHiLoudly(firstName) {
  return `${firstName.toUpperCase()}`;
}

const greeting = sayHiTo('World');
const loudGreeting = sayHiLoudly(sayHiTo('World'));
