/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

function insertionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i-1; j > -1; j--) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
        i = j;
      }
    }
  }

  function swap(arr, i, j) {
    if (i !== j) {
      arr[i] = arr[i]^arr[j];
      arr[j] = arr[i]^arr[j];
      arr[i] = arr[i]^arr[j];
    }
  }

  return arr;
}

console.log(insertionSort([10, 185, 5, -5, 7, 3]));