## TASK6
Stashing Changes for Context Switching

## REQUIREMENTS
- Make changes in your working directory without committing.
- Use `git stash` to save these changes.
- Switch branches, perform some work, then return and reapply stashed changes with `git stash pop`.
- Demonstrate viewing and managing multiple stashes using `git stash list` and `git stash drop`.

## TECHNOLOGIES USED
GIT

#### Steps Performed
1. Check status of the repository
git status
Shows the current branch and untracked/modified files.
Example output:
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  Task6/
2. Stage new or modified files
git add <file_or_directory>
Example:
git add Task6
Check status again:
git status
Output:
Changes to be committed:
  new file: Task6/sample.text
  new file: Task6/text.txt
3. Stash your changes
git stash
Temporarily saves your changes and cleans your working directory.
Output example:
Saved working directory and index state WIP on main: 4660d00 Merge pull request #4
Verify:
git status
nothing to commit, working tree clean
4. Make other changes and commit
Modify a file, e.g., Task5/index.html
Stage and commit:
git add Task5
git commit -m "Changes made in Task5 index file"
5. Reapply stashed changes
git stash pop
Reapplies the latest stash and removes it from the stash list.
Output:
Changes to be committed:
  new file: Task6/sample.text
  new file: Task6/text.txt
Dropped refs/stash@{0}
6. Managing multiple stashes
Create multiple stashes:
git stash
List stashes:
git stash list
Output example:
stash@{0}: WIP on main: 38ccc3c Changes made in Task5 index file
Drop a specific stash:
git stash drop stash@{0}
Clear all stashes (optional):
git stash clear
7. Notes
git stash is useful when you want to switch branches without committing unfinished work.
git stash pop applies and removes the stash.
git stash apply applies but keeps the stash.
Use git stash list to see all stashes.
Use git stash drop or git stash clear to remove stashes when no longer needed.

## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0ce8761b-2d4f-417d-a7c2-bb046a5383a8" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/99342e2d-7599-4fe8-94e4-f397ebd86beb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3d6bb0e5-a55c-4d95-bb9e-b1a878b7e2f4" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/279e4f6b-ceac-4dcd-a4bf-a21ca2dde2a2" />



