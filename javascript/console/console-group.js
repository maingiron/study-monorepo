// https://dev.to/thebitforge/10-javascript-console-methods-you-didnt-know-existed-and-how-theyll-save-you-hours-of-debugging-4a7c

// Example of using console.group() and console.groupEnd() in JavaScript
console.group("User Login Process");
console.log("Validating credentials...");
console.log("Checking database...");
console.log("Generating session token...");
console.log("Setting cookies...");
console.groupEnd();

console.group("Loading User Data");
console.log("Fetching profile...");
console.log("Fetching preferences...");
console.log("Fetching notifications...");
console.groupEnd();

// Example: Grouping Related Logs for Order Processing
console.group("Processing Order #12345");

console.group("Validating Items");
console.log("Item 1: Widget - $10.99 ✓");
console.log("Item 2: Gadget - $24.99 ✓");
console.log("Total items: 2");
console.groupEnd();

console.group("Payment Processing");
console.log("Payment method: Credit Card");
console.log("Amount: $35.98");
console.log("Status: Approved");
console.groupEnd();

console.group("Inventory Update");
console.log("Reducing Widget stock: 150 → 149");
console.log("Reducing Gadget stock: 75 → 74");
console.groupEnd();

console.groupEnd();

// Example: Nested Groups for Debugging a Function
console.group("Critical Operation");
try {
  riskyOperation();
} finally {
  console.groupEnd(); // Always closes even if error is thrown
}
