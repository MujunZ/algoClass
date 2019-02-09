//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function downTo0(n) {
  console.log(n)
  if (n===0) {
    return;
  }
  while (n > 0) {
    n--;
    return downTo0(n);
  }
}

// downTo0(10);

//2. Next, try looping just like above except using recursion

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
  if(expo < 1){
    return 1;
  }
  while (expo > 0) {
    expo--;
    return base * recursiveExponent(base, expo);
  }
}

// console.log(recursiveExponent(2,10));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {

}

// console.log(recursiveMultiplier([0,1,2,3],3))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
  if (arr.length < 1) return arr;
  let last = arr.shift();
  recursiveReverse(arr);
  arr.push(last);
  return arr;
}

console.log(recursiveReverse([1, 2, 3]));
