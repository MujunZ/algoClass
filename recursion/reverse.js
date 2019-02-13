/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  let first = str.slice(0,1);
  return reverse(str.slice(1)) + first;
}

// console.log(reverse("abcdefg"));