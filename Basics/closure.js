// Closures

function outer() {
  const outerVar = 'I am the outer var';
  function inner() {
    const innerVar = 'I am the inner var';
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}

const innerFn = outer();
innerFn();

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('henry'));
console.log(sayHey('henry'));
