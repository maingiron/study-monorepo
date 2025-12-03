// https://dev.to/thebitforge/10-javascript-console-methods-you-didnt-know-existed-and-how-theyll-save-you-hours-of-debugging-4a7c

// Example: Displaying Data in Table Format
const users = [
  { id: 1, name: "Sarah Chen", role: "Developer", active: true },
  { id: 2, name: "Marcus Thompson", role: "Designer", active: true },
  { id: 3, name: "Elena Rodriguez", role: "Product Manager", active: false },
  { id: 4, name: "James Wilson", role: "Developer", active: true },
];

console.table(users);

// Only show name and role columns
console.table(users, ["name", "role"]);

// Object of Objects
const apiResponses = {
  github: { status: 200, time: 145, cached: false },
  twitter: { status: 200, time: 312, cached: true },
  stripe: { status: 503, time: 5000, cached: false },
  sendgrid: { status: 200, time: 89, cached: true },
};

console.table(apiResponses);
