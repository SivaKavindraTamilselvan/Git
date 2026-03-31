## TASK3
Undoing Changes and Reverting Commits

## REQUIREMENTS
- Modify a tracked file and use `git checkout -- <file>` (or `git restore`) to undo changes.
- Make a commit, then use `git revert` or `git reset` to undo a commit safely.
- Explain the differences between these approaches.

## TECHNOLOGIES USED
git

## STEPS 
# Undo Changes in Git

## 1. Modify a Tracked File and Undo Changes

### STEPS

* Modify an already tracked file
* Check the file status
* Undo the changes using `git restore` or `git checkout -- <file>`

### COMMAND

Modify file

```bash
edit README.md
```

Check status

```bash
git status
```

Undo changes (Recommended)

```bash
git restore README.md
```

Old Method

```bash
git checkout -- README.md
```

### USE

* Undo modified file changes
* Restore file to last committed version
* Used **before commit**

---

# 2. Make a Commit and Undo Using Git Revert

## STEPS

* Modify file
* Add file to staging
* Commit the file
* Undo commit using `git revert`

### COMMAND

Add file

```bash
git add README.md
```

Commit file

```bash
git commit -m "Updated README"
```

Undo commit safely

```bash
git revert HEAD
```

### USE

* Undo committed changes
* Creates a new commit
* Safe for shared repositories

---

# 3. Make a Commit and Undo Using Git Reset

## STEPS

* Modify file
* Add file
* Commit file
* Undo commit using `git reset`

### COMMAND

Reset commit (keep changes)

```bash
git reset HEAD~1
```

Soft reset

```bash
git reset --soft HEAD~1
```

Hard reset (delete everything)

```bash
git reset --hard HEAD~1
```

### USE

* Undo commits locally
* Remove commit history
* Not safe if already pushed

---

# Difference Between Approaches

| Command                | Use                | Safe | Deletes History |
| ---------------------- | ------------------ | ---- | --------------- |
| `git restore`          | Undo file changes  | Yes  | No              |
| `git checkout -- file` | Old restore method | Yes  | No              |
| `git revert`           | Undo commit safely | Yes  | No              |
| `git reset`            | Remove commit      | No   | Yes             |

---

# Summary

* `git restore` → Undo file changes
* `git revert` → Undo commit safely
* `git reset` → Remove commit locally

## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d7550d80-7489-475b-8542-6249d6b40f5e" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4b02c6a0-00dd-4474-a077-1060713584ed" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/983730de-6ea7-4426-97d0-f47cd33ad43f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/07271299-ccde-4249-b590-f31ae5201d58" />


