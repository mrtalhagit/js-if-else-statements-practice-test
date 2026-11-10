// Q8. Login with validation
// Create variables username (string), password (string) and isActive (boolean).
// Check the conditions in this order and print the first message that applies:
// 1. username is empty            -> Username required
// 2. password is empty            -> Password required
// 3. username is not "admin"      -> User not found
// 4. password is not "1234"       -> Wrong password
// 5. isActive is false            -> Account blocked
// 6. Everything is correct        -> Login successful
// Test: ("", "1234", true)        -> Username required
//       ("admin", "0000", true)   -> Wrong password
//       ("admin", "1234", false)  -> Account blocked
//       ("admin", "1234", true)   -> Login successful

let username = "admin";
let password = "1234";
let isActive = true;

if (username === "") {
  console.log("Username required");
} else if (password === "") {
  console.log("Password required");
} else if (username !== "admin") {
  console.log("User not found");
} else if (password !== "1234") {
  console.log("Wrong password");
} else if (isActive === false) {
  console.log("Account blocked");
} else {
  console.log("Login successful");
}
