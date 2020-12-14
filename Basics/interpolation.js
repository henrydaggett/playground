function calculateBill(amount, people) {
  const total = amount / people;
  return total;
}

console.log(`Your total is £${calculateBill(100, 3)}`);

const bill = 100;
const taxRate = 0.13;

function taxMe() {
  console.log('This is calculating!');
  const total = bill * (1 + taxRate);
  return total;
}

console.log(`Your total is £${taxMe()}`);
