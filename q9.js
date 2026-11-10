// Q9. Electricity bill (slabs)
// Create a variable units. Calculate the bill as follows:
// - First 100 units: Rs 10 per unit
// - Units 101 to 300: Rs 15 per unit (only for the units above 100)
// - Units above 300: Rs 20 per unit (only for the units above 300)
// Print the total bill.
// Test: 80 -> 800; 150 -> 1750; 350 -> 5000.

let units = 150;
let bill;

if (units <= 100) {
  bill = units * 10;
} else if (units <= 300) {
  bill = 100 * 10 + (units - 100) * 15;
} else {
  bill = 100 * 10 + 200 * 15 + (units - 300) * 20;
}


console.log(bill);