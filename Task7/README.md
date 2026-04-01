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
Git Cherry-Pick Workflow Example
1. Create Branches
Start on the main branch:
git checkout main
Create GIT07/Branch1 and switch to it:
git checkout -b GIT07/Branch1
Create GIT07/Branch2 from main:
git checkout main
git checkout -b GIT07/Branch2
2. Make Commits on Branches

On GIT07/Branch1:

Add a text file and commit:
git add Task7/text.txt
git commit -m "Added a Text file"
Add an HTML file and commit:
git add Task7/index.html
git commit -m "Index html page added to branch1"

On GIT07/Branch2:

Add a text file and commit:
git add Task7/text.txt
git commit -m "Added a text file"
3. Cherry-Pick Commits
Check commits on GIT07/Branch1:
git log GIT07/Branch1 --oneline

Example output:

b9a5aa5 Index html page added to branch1
8ddeb74 Added a Text file
Switch to GIT07/Branch2:
git checkout GIT07/Branch2
Cherry-pick the text file commit:
git cherry-pick 8ddeb74
Cherry-pick the HTML file commit:
git cherry-pick b9a5aa5
4. Resolving Conflicts

During cherry-pick, a conflict may occur in Task7/index.html:

Open the conflicted file and manually resolve the conflict.
Stage the resolved file:
git add Task7/index.html
Continue the cherry-pick:
git cherry-pick --continue

Repeat these steps until all conflicts are resolved and the cherry-pick finishes.

5. Verify Commit History

Check that the commits from GIT07/Branch1 are now in GIT07/Branch2:

git log --oneline

You should see:

246432a Index html page added to branch1
8e1dc71 Added a Text file
f971642 Added a text file

Summary
Created two branches with independent commits.
Cherry-picked specific commits from GIT07/Branch1 to GIT07/Branch2.
Resolved conflicts manually in case of overlapping changes.
Verified the history to ensure commits are correctly applied.

## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/393a9802-02c8-47a1-94a8-e7d91c928a5a" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a3e6c28e-5a7a-4d00-8d1a-c92cde1da63f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/38cca246-2015-4ba4-bd0e-a0c544d53e14" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f88534af-1210-4f70-9e5e-aea3a124acfb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b7db5f8d-fad4-487c-bea2-bb4520c2a17e" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/be0f278b-16a4-4f06-b936-c44da030d891" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/60748866-85ef-4203-90cf-f1f8c6e23fe0" />




