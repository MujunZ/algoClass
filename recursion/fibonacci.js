/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

function fibonnaci(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonnaci(n-1) + fibonnaci(n-2)
}

console.log(fibonnaci(9))
