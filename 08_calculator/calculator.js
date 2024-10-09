const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arg) {
  result = arg.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  if (arg.length==0) {
    result = 0;
  } else if (arg.length==1) {
    result = arg[0];
  }
	return result;
};

const multiply = function(arg) {
  result = arg.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(arg) {
  let result = 1;

  if (arg==0 || arg==1) {
    return result;
  }

  for (let i = 2; i <= arg; i++) {
    result = result * i;
  }
  return result;
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
