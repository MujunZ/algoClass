/*
Version 1:
Given the size of a grid (X rows and Y columns), write a function that returns the number of possible paths one can take starting at the top left of the grid and ending at the bottom right, assuming you can only move to the right and down.

Version 2:
Now, imagine that the you can move up, down, left, or right but cannot visit a spot that has already been visited. How many unique paths can the you take?
Hint: it may be useful to create a grid class and use it to keep track of the state as the you traverses the grid. What useful methods can you put on your grid class? Can you write an implementation that only uses a single grid?
*/

function pathCount(x,y) {
  function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n*factorial(--n);
  }
  return factorial(x + y -2)/(factorial(x-1)*factorial(y-1));
}

console.log(pathCount(8,6))

function pathCountV1(rowCount, columnCount) {
  var pathCount = 0;
  function recurse(i, j) {
    if (i === rowCount - 1 && j === columnCount - 1) pathCount++;
    else {
      if (i < rowCount - 1) recurse(i + 1, j);
      if (j < columnCount - 1) recurse(i, j + 1);
    }

  }
  recurse(0, 0);
  return pathCount;
}

console.log(pathCountV1(8,6));