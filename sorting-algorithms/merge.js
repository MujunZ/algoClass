/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = arr.length/2;
  let left = arr.slice(0, Math.floor(mid));
  let right = arr.slice(Math.floor(mid));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
  let res = [];
  let aIdx = 0;
  let bIdx = 0;
  while (aIdx < a.length && bIdx < b.length) {
    if (a[aIdx] < b[bIdx]) {
      res.push(a[aIdx++]);
    } else {
      res.push(b[bIdx++]);
    }
  }
  return res.concat(a.slice(aIdx).concat(b.slice(bIdx)));
}

console.log(mergeSort([5,3,7,-4]))
