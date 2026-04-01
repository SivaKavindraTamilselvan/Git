import { readFileSync } from "fs";
const filePath = "Task8/script.js";

const content = readFileSync(filePath, "utf-8");

if (content.includes("console.log")) {
  console.error(`Remove console.log statements from ${filePath} before committing!`);
  process.exit(1);
}

console.log(`${filePath} passed pre-commit checks! Commit allowed.`);
process.exit(0);