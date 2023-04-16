// 2). The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.
//Solution
function shiftToLeft(x, y) {
  if (y === 0) {
    return x;
  } else {
    return shiftToLeft(x * 2, y - 1);
  }
}

console.log(shiftToLeft(80, 3)); // 640
console.log(shiftToLeft(-24, 2)); // -6
console.log(shiftToLeft(-5, 1)); // -3
