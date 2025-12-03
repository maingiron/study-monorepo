// https://dev.to/thebitforge/10-javascript-console-methods-you-didnt-know-existed-and-how-theyll-save-you-hours-of-debugging-4a7c

// exemple bad
let callCount = 0;
function myFunction() {
  callCount++;
  console.log("Called", callCount, "times");
}

// Example: Using console.count() to Track Function Calls
function handleClick() {
  console.count("button clicks");
  // Do click handling...
}

button.addEventListener("click", handleClick);

// First click:  button clicks: 1
// Second click: button clicks: 2
// Third click:  button clicks: 3

// Example: Counting API Requests
function fetchData(endpoint) {
  console.count(`API call to ${endpoint}`);
  return fetch(endpoint);
}

fetchData("/users"); // API call to /users: 1
fetchData("/posts"); // API call to /posts: 1
fetchData("/users"); // API call to /users: 2
fetchData("/users"); // API call to /users: 3
