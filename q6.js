// Q6. Largest of three
// Create variables a, b and c. Print the largest of the three.
// Test: 3, 9, 5 -> 9; 10, 2, 10 -> 10.

let a = 3;
let b = 9;
let c = 5;

if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}