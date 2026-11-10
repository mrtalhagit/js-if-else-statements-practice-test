// Q7. Leap year
// Create a variable year. A year is a leap year if it is divisible by 4 and not by 100,
// or if it is divisible by 400. Print Leap year or Not a leap year.
// Test: 2024 -> Leap year, 1900 -> Not a leap year,
//       2000 -> Leap year, 2023 -> Not a leap year.

let year = 2024;

if (year % 4 === 0 ) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}