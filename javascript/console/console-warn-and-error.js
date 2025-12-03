// https://dev.to/thebitforge/10-javascript-console-methods-you-didnt-know-existed-and-how-theyll-save-you-hours-of-debugging-4a7c

console.warn("WARNING: Analytics ID not provided. Analytics will be disabled.");

console.error("CRITICAL: API key is missing. App will not function properly.");

// Example: Validating User Input with Warnings and Errors
function validateUser(user) {
  const errors = [];
  const warnings = [];

  if (!user.email) {
    errors.push("Email is required");
  } else if (!isValidEmail(user.email)) {
    errors.push("Email format is invalid");
  }

  if (!user.phone) {
    warnings.push("Phone number is recommended but optional");
  }

  if (user.age < 13) {
    errors.push("User must be 13 or older");
  } else if (user.age < 18) {
    warnings.push("User is under 18 - some features restricted");
  }

  if (errors.length > 0) {
    console.error("User validation failed:", errors);
    return false;
  }

  if (warnings.length > 0) {
    console.warn("User validation warnings:", warnings);
  }

  return true;
}
