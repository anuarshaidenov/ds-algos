const factorialRecursive = (number) => {
  if (number === 1) {
    return number;
  }

  return number * factorialRecursive(number - 1);
};
const factorialIterative = (number) => {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
