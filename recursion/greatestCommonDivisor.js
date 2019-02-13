/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

function greatestCommonDivisor(num1,num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  if (max%min === 0) {
    return min;
  }
  return greatestCommonDivisor(max, max%min);
}

// console.log(greatestCommonDivisor(15,10))