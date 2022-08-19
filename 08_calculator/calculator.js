const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arrInt) {
	let totalSum = 0;
  for (let index = 0; index < arrInt.length; index++) {
    totalSum += arrInt[index];    
  }
  return parseInt(totalSum);
};

const multiply = function(arrMul) {
  let totalMulti = 1;
  for (let index = 0; index < arrMul.length; index++) {
    totalMulti *= arrMul[index];    
  }
  return parseInt(totalMulti);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(fac) {
  let totalFac = 1;
  let i = 1;
  while (i <= fac) {
    totalFac *= i;
    i++;
  }
  return totalFac;
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
