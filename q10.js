// Q10. BMI category with validation
// Create variables weight (kg) and height (metres). If either is 0 or negative, print Invalid input. Otherwise calculate BMI = weight / (height * height) and
// print the BMI with one decimal (use .toFixed(1)) and its category:
// - Below 18.5   -> Underweight
// - 18.5 to 24.9 -> Normal
// - 25 to 29.9   -> Overweight
// - 30 and above -> Obese
// Test: 70, 1.75 -> BMI 22.9, Normal
//       95, 1.70 -> BMI 32.9, Obese
//       70, 0    -> Invalid input

let weight = 70;
let height = 1.75;

if (weight <= 0 || height <= 0) {
  console.log("Invalid input");
} else {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log("BMI " + bmi.toFixed(1) + ", Underweight");
  } else if (bmi < 25) {
    console.log("BMI " + bmi.toFixed(1) + ", Normal");
  } else if (bmi < 30) {
    console.log("BMI " + bmi.toFixed(1) + ", Overweight");
  } else {
    console.log("BMI " + bmi.toFixed(1) + ", Obese");
  }
}


// 34.99685

// after .tofixed(1)
// 34.9