const fs = require("fs");
const filePath = "Task8/script.js";

// Read the file
const content = fs.readFileSync(filePath, "utf-8");

// Check for console.log statements
if (content.includes("console.log")) {
  console.error(`Remove console.log statements from ${filePath} before committing!`);
  process.exit(1); // Block commit
}

console.log(`${filePath} passed pre-commit checks! Commit allowed.`);
process.exit(0); // Allow commit