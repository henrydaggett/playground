// hoisting

// you can call a function before declaring it

// You might want to do something like this when you want to clearly know what the file does, so you put the result first!
sayHi();

function sayHi() {
  console.log('Hi!');

  // this even works if we nest the function that is declared later
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}
