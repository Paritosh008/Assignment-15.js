// 4). This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15

// This means that the first triangle has just one dot, the second one
// has three dots, the third one has 6 dots and so on.
// Write a function that returns the cumulative sum of the number of
// all the previous (including current) dots when given its
// corresponding triangle number of the sequence.

// Figure: Triangular Number Sequence

// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 56 (1+3+6+10+15+21)

function triangle(n) {
  return (n * (n + 1)) / 2;
}

function cumulativeSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += triangle(i);
  }
  return sum;
}

console.log(cumulativeSum(1)); // 1
console.log(cumulativeSum(6)); // 56
console.log(cumulativeSum(3)); // 10
