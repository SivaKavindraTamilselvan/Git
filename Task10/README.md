## TASK9
Working with Remote Repositories and Collaboration

## REQUIREMENTS
- Create two branches with distinct commits.
- Identify a commit on one branch that you want to apply to the other.
- Use `git cherry-pick <commit-hash>` to apply the commit and handle any conflicts if they arise.
- Verify the commit history to ensure the cherry-picked commit is present.

## TECHNOLOGIES USED
GIT

#### Steps Performed
Task10 — Force Push and Reflog Recovery
Objective

Demonstrate force push, rewriting history, and recovering lost commits using reflog.

Step 1: Create Feature Branch
git checkout -b feature/login

Create file

git add Task10
git commit -m "Login initiated"
Step 2: Create Bugfix Branch
git checkout main
git checkout -b bugfix/navbar

Add file

git add Task10
git commit -m "Navbar bug fixing"
Step 3: Create Release Branch
git checkout main
git checkout -b release/v1

Add file

git add Task10
git commit -m "Release version"
Step 4: Update Feature Branch
git checkout feature/login

Add changes

git add Task10
git commit -m "Update Login"
Step 5: Interactive Rebase
git rebase -i HEAD~2

Squash commits

Save and exit

Step 6: Push Feature Branch
git push -u origin feature/login
Step 7: Make Another Commit
git add Task10
git commit -m "changes in login"
Step 8: Rebase Again
git rebase -i HEAD~2

History is rewritten

Step 9: Push Fails
git push origin feature/login

Error occurs:

non-fast-forward
Step 10: Force Push
git push --force origin feature/login

This overwrites remote history.

Step 11: Simulate Mistake

Reset commit

git reset --hard HEAD~1

Commit is lost.

Step 12: Use Reflog
git reflog

Find lost commit:

5cb73a1 HEAD@{1}
Step 13: Recover Commit
git reset --hard 5cb73a1

Commit recovered.

Step 14: Verify
git log

Recovered commit appears.

Why Force Push is Dangerous
Rewrites history
Removes commits
Affects team members
Can cause data loss
Best Practices
Avoid force push on main branch
Use only feature branches
Inform team before force push
Use safer option:
git push --force-with-lease
Conclusion
Created multiple branches
Rewrote history using rebase
Used force push
Simulated commit loss
Recovered using reflog

## SCREENSHOTS




