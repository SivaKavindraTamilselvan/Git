import { readFileSync } from "fs";
const filePath = "Task8/script.js";

// Read the JS file
const content = readFileSync(filePath, "utf-8");

// Block commit if console.log exists
if (content.includes("console.log")) {
  console.error(`Remove console.log statements from ${filePath} before committing!`);
  process.exit(1); // fail → block commit
}

console.log(`${filePath} passed pre-commit checks! Commit allowed.`);
process.exit(0); // success → allow commit