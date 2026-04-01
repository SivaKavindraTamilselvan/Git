## TASK10
Comprehensive Workflow with Forced Pushes and Recovery

## REQUIREMENTS
- Create a repository with multiple branches representing features, bug fixes, and releases.
- Simulate a scenario where a forced push (`git push --force`) is required (e.g., after rewriting history with interactive rebase).
- Use `git reflog` to locate and recover lost commits after a mistaken force push.
- Document each step, explaining how and why forced pushes should be handled with care.
- Discuss best practices for collaborating with teams when rewriting history and using force pushes.

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
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ae28fb59-686c-4505-b362-95fe67019c81" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dcaae3cf-28ea-4f1b-ad9b-0815a05c1a40" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/56a3b609-180e-43d0-926f-8ab3abc18681" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c7a33fc5-2151-4877-b6ec-302f06116293" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/46d015f3-60ec-4c7f-b5f0-9bc6d12f694b" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/723d2970-7157-4477-837b-848244c92f54" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c426cc71-e935-4eee-b541-8ec67fbe317f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/431ffff4-3c46-4a8c-aa3e-6f6f865d1754" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d13e4fba-0a78-4683-826a-4fe61359aaee" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d1966c07-1b44-4a3f-bb27-129f29ebdc64" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0212db81-0191-423d-9743-cc2cd24a1a2d" />




