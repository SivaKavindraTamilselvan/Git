## TASK7
Cherry-Picking Commits Between Branches

## REQUIREMENTS
- Create two branches with distinct commits.
- Identify a commit on one branch that you want to apply to the other.
- Use `git cherry-pick <commit-hash>` to apply the commit and handle any conflicts if they arise.
- Verify the commit history to ensure the cherry-picked commit is present.

## TECHNOLOGIES USED
GIT

#### Steps Performed
1. Create a Local Repository and Push to GitHub

Step 1: Create a local folder and initialize Git

mkdir GitHubDemo
cd GitHubDemo
git init

Step 2: Create a README file

echo "# GitHub Demo Repository" > README.md

Step 3: Stage and commit the README

git add README.md
git commit -m "Initial commit with README"

Step 4: Create a repository on GitHub

Go to GitHub
 → Click New repository → Name it GitHubDemo → Create repository (without README, since we already have one locally).

Step 5: Add remote and push

git remote add origin https://github.com/<your-username>/GitHubDemo.git
git branch -M main
git push -u origin main
2. Create a Feature Branch, Make Commits, and Push

Step 1: Create and switch to a feature branch

git checkout -b feature/update-readme

Step 2: Make changes to README

echo "This is a new feature update." >> README.md

Step 3: Stage and commit the change

git add README.md
git commit -m "Add feature update to README"

Step 4: Push the feature branch to GitHub

git push -u origin feature/update-readme
3. Open a Pull Request (PR) and Code Review
Go to your GitHub repository page.
You’ll see a prompt: Compare & pull request → Click it.
Add a title like: Update README with feature details.
Optional: Add a description of the changes.
Click Create pull request.
You or your team can now review the code, comment, or request changes.
4. Merge the Feature Branch into Main and Pull Locally

Step 1: Merge on GitHub

After approval, click Merge pull request → Confirm merge.
Optionally, delete the branch on GitHub after merging.

Step 2: Update your local main branch

git checkout main
git pull origin main

Now your local main branch has the latest changes from the feature branch.

✅ Summary of Commands

# Initialize repo
git init
echo "# GitHub Demo Repository" > README.md
git add README.md
git commit -m "Initial commit"
git remote add origin <repo-url>
git branch -M main
git push -u origin main

# Feature branch
git checkout -b feature/update-readme
echo "This is a new feature update." >> README.md
git add README.md
git commit -m "Add feature update to README"
git push -u origin feature/update-readme

# Pull request & merge on GitHub
# Then locally:
git checkout main
git pull origin main

## SCREENSHOTS




