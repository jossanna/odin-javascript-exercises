const fibonacci = function (input) {
  if (typeof input !== "number") {
    input = parseInt(input);
  }

  if (input === 0) {
    return 0;
  }
  if (input === 1) {
    return input;
  }
  if (input < 0) {
    return "OOPS";
  }

  let fib = [0, 1];
  for (let i = 2; i <= input; i++) {
    fib.push(fib.at(-2) + fib.at(-1));
  }
  return fib.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
