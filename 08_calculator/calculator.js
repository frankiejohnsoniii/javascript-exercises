const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(numbers) {
	let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  for (const number of numbers) {
    total *= number;
  }
  return total;
};

const power = function(x,y) {
	let total = 1;
  for (i=1;i<=y;i++){
    total *= x;
  }
  return total;
};

const factorial = function(x) {
	let total = 1;
  for (i=x; i>=1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
