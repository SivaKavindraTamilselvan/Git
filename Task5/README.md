## TASK5
Interactive Rebasing for Clean Commit History

## REQUIREMENTS
- Create a series of commits (some with minor changes or typos in commit messages).
- Run `git rebase -i HEAD~n` to squash, reorder, and edit commit messages.
- Explain how squashing helps in cleaning up commit history before merging into a main branch.

## TECHNOLOGIES USED
GIT

### Interactive Rebasing for Clean Commit History

#### Steps Performed

1. Created a new branch from main branch.

```
git checkout -b GIT05/REBASE
```

2. Added multiple commits with small changes.

```
git add Task5
git commit -m "Added index.html file"
git commit -m "Created css file"
git commit -m "Added css"
git commit -m "Created script file"
...
```

3. Checked commit history.

```
git log
```

4. Started interactive rebase to clean commit history.

```
git rebase -i HEAD~10
```

5. In the interactive editor:

* Used `pick` to keep commits
* Used `squash` to combine small commits
* Used `edit` to modify commits
* Reordered commits by moving lines

Example:

```
pick ca54ee2 Added index.html file
squash 64cb068 Added structure for TO-DO
pick 7dc3130 Created css file
squash 826f789 Added css for to-do
pick e45987c Created script file
```

6. Resolved merge conflicts (if any)

```
git status
```

Edit conflicting file and then:

```
git add .
git rebase --continue
```

7. Completed rebase successfully and verified cleaned history.

```
git log
```

#### Result

* Small commits were combined
* Commit messages were cleaned
* History became more readable
* Project ready for merging into main branch

#### Why Squashing is Useful

Squashing helps:

* Reduce unnecessary commits
* Combine related changes
* Maintain clean project history
* Make code review easier


## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c8bf9dc3-fce1-48ab-a83d-2faf9c3bea19" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bb13c0bf-94f5-4c03-b7ae-bf7b57a2194a" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8c3b1a7e-2dfc-4fb5-a622-c09dbfd58028" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0e5dec65-099b-4ab2-a39d-d984930f4522" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2aa47e95-f556-4a00-a638-617418cc43cf" />




