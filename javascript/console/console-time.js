// https://dev.to/thebitforge/10-javascript-console-methods-you-didnt-know-existed-and-how-theyll-save-you-hours-of-debugging-4a7c

// Example 1: Basic Function Timing
console.time("fetchUserData");

async function fetchUserData() {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
}

const users = await fetchUserData();

console.timeEnd("fetchUserData");
// Output: fetchUserData: 347.82ms

// Example 2: Comparing Algorithm Performance
const largeArray = Array.from({ length: 100000 }, (_, i) => i);

// Test forEach
console.time("forEach");
largeArray.forEach((num) => num * 2);
console.timeEnd("forEach");

// Test map
console.time("map");
largeArray.map((num) => num * 2);
console.timeEnd("map");

// Test for loop
console.time("for-loop");
for (let i = 0; i < largeArray.length; i++) {
  largeArray[i] * 2;
}
console.timeEnd("for-loop");

// Outputs:
// forEach: 1.050048828125 ms
// map: 1.22998046875 ms
// for-loop: 0.681884765625 ms

// Example 4: Timing User Interactions
button.addEventListener("click", () => {
  console.time("button-click-handler");

  // Simulate complex operations
  const result = performHeavyCalculation();
  updateUI(result);

  console.timeEnd("button-click-handler");
});

// Pro Tips

// Pair with console.timeLog()
console.time("long-operation");

await step1();
console.timeLog("long-operation"); // long-operation: 123ms

await step2();
console.timeLog("long-operation"); // long-operation: 456ms

await step3();
console.timeEnd("long-operation"); // long-operation: 789ms

// Create a reusable timing function
async function timeAsync(label, asyncFn) {
  console.time(label);
  try {
    return await asyncFn();
  } finally {
    console.timeEnd(label);
  }
}

const data = await timeAsync("fetch-data", () => fetch("/api/data"));

// Measure different implementations
function measureImplementation(name, implementation, iterations = 1000) {
  console.time(name);
  for (let i = 0; i < iterations; i++) {
    implementation();
  }
  console.timeEnd(name);
}

measureImplementation("string-concat", () => {
  let str = "";
  for (let i = 0; i < 1000; i++) str += "x";
});

measureImplementation("array-join", () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) arr.push("x");
  arr.join("");
});
