// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.

//Solution:
function secondDerivative(b, m) {
  return b * (b - 1) * Math.pow(m, b - 2) + b * Math.pow(Math.E, b * m);
}

console.log(secondDerivative(2, 3)); 
console.log(secondDerivative(4, 2)); 
console.log(secondDerivative(3, 4)); 
