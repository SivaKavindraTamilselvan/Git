## TASK8
Using Git Hooks for Automated Checks

## REQUIREMENTS
- Create a `pre-commit` hook in the `.git/hooks` directory.
- Write a simple script (e.g., a shell or Node script) that runs a linter or unit test.
- Ensure that if tests or linting fail, the commit is aborted.
- Document how Git hooks can improve code quality in collaborative projects.

## TECHNOLOGIES USED
Git

## Steps

Git Hooks - Pre-Commit Example
Step 1: Create Pre-Commit Hook

Go to the hooks folder inside .git

cd .git/hooks

Create pre-commit file

touch pre-commit
chmod +x pre-commit
Step 2: Add Shell Script

Open .git/hooks/pre-commit and add:

#!/bin/sh

node Task8/pre-commit.js

if [ $? -ne 0 ]; then
  echo "Pre-commit check failed! Commit aborted."
  exit 1
fi

exit 0

This script runs before every commit.

Step 3: Create Node Script

Create file:

Task8/pre-commit.js

Add code:

const fs = require("fs");

const filePath = "Task8/script.js";

const content = fs.readFileSync(filePath, "utf-8");

if (content.includes("console.log")) {
  console.error("Remove console.log before commit");
  process.exit(1);
}

console.log("Check passed");
process.exit(0);
Step 4: Add Console Log for Testing

Open:

Task8/script.js

Add:

console.log("test");
Step 5: Stage Files
git add Task8
Step 6: Commit
git commit -m "Testing pre commit"

If console.log exists, commit will fail.

Step 7: Remove Console Log

Remove:

console.log("test");
Step 8: Commit Again
git add Task8
git commit -m "commit success"

Commit will succeed.

## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/76c7b3c6-6f9e-4ad5-9c0c-6db777941adb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5a971ced-1055-464a-b70d-be340ac8640c" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/811768f4-c1b5-428a-9e15-d5801c74fa1b" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d9a4d732-9dcc-42e0-aafd-9a49b3a8a09b" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e63bca9a-46e0-484a-8605-31fa41e66375" />

## git hooks

1. What are Git Hooks?

Git hooks are scripts that Git runs automatically when certain events happen in your repository. Think of them as “event listeners” for Git actions.

Client-side hooks: Run on your local machine.
Example: pre-commit, commit-msg, pre-push.
Server-side hooks: Run on the remote repository.
Example: pre-receive, post-receive.

They help enforce rules, automate tasks, and improve code quality.

2. Where Git Hooks Live

Hooks live in the .git/hooks folder of your repository. By default, Git creates sample hooks with .sample extension.

ls .git/hooks

You might see files like:

pre-commit.sample
pre-push.sample
commit-msg.sample

To enable a hook, remove .sample or create a new script with the exact hook name (e.g., pre-commit) and make it executable.

3. Common Hook Types and Their Purpose
Hook	When it runs	Example use
pre-commit	Before a commit is saved	Run linters, tests, or format code. Block commit if fails.
commit-msg	After writing a commit message	Enforce commit message format (e.g., Conventional Commits).
pre-push	Before pushing to remote	Run tests to prevent broken code from being pushed.
post-commit	After commit	Send notifications or update a tracker.
pre-receive (server-side)	Before accepting pushed commits	Enforce rules on the remote repo.
4. Example: pre-commit Hook (Shell Script)

Step 1: Create a pre-commit file

cd .git/hooks
touch pre-commit
chmod +x pre-commit

Step 2: Write a script to run a linter

For example, if you’re using JavaScript with ESLint:

#!/bin/sh
# Run ESLint on all staged .js files
FILES=$(git diff --cached --name-only -- '*.js')

if [ "$FILES" = "" ]; then
  exit 0
fi

echo "Running ESLint on staged files..."
for file in $FILES; do
  npx eslint "$file"
  if [ $? -ne 0 ]; then
    echo "Linting failed! Commit aborted."
    exit 1
  fi
done

exit 0

Step 3: Test the hook

Modify a JS file with lint errors.
Try to commit:
git add .
git commit -m "Test pre-commit"
If ESLint fails, the commit is blocked.
5. Example: commit-msg Hook

This hook checks that commit messages follow a pattern, e.g., TYPE: message.

#!/bin/sh
COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat $COMMIT_MSG_FILE)

PATTERN="^(feat|fix|docs|chore|refactor): .+"

if ! echo "$COMMIT_MSG" | grep -qE "$PATTERN"; then
  echo "Invalid commit message format!"
  echo "Use: feat|fix|docs|chore|refactor: message"
  exit 1
fi

Try committing Update README → It will fail.

6. Benefits of Git Hooks
Improve code quality: Prevent commits with lint or test errors.
Enforce team standards: Commit message formats, code formatting, naming conventions.
Automate repetitive tasks: Run scripts, generate docs, send notifications.
Prevent broken code from reaching the remote: Especially important in team projects.
7. Summary Example Flow
pre-commit → Run ESLint → Block commit if errors.
commit-msg → Check message format → Block commit if wrong.
pre-push → Run unit tests → Prevent pushing broken code.
post-commit → Notify Slack → Optional automation.



