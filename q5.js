// Q5. Password strength
// Create a string variable password. If its length is 8 or more, print Strong;
// otherwise print Weak. (Hint: .length)
// Test: "abc12345" -> Strong, "abc" -> Weak.

let password = "abc12345";

if (password.length >= 8) {
  console.log("Strong");
} else {
  console.log("Weak");
}