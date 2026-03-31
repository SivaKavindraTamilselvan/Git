## TASK3
Simulating and Resolving Merge Conflicts

## REQUIREMENTS
- Create two branches from the same commit.
- Modify the same line(s) of code in a common file in both branches.
- Attempt to merge the branches, observe the conflict, and resolve it manually.
- Use `git status` and `git diff` to identify and resolve the conflicting changes.

## TECHNOLOGIES USED
GIT


# Step 1: Switch to Main Branch

First, switch to the main branch and update it with the latest changes.

```bash
git checkout main
git pull origin main
```

This ensures we are working with the latest version of the repository.

---

# Step 2: Create a New File

Create a new file to simulate merge conflict.

```bash
touch textfile
```

Move the file into Task4 folder and add content.

Example Content:

```
Hii ! I am Siva Kavindra
From Kongu Engineering College
Computer Science and Design Department
```

---

# Step 3: Add and Commit

```bash
git add Task4
git commit -m "Added the text file to learn merge conflict"
```

This commit acts as the **common base commit** for both branches.

---

# Step 4: Create Two Branches

Create two branches from the same commit:

```bash
git branch GIT04/Branch1
git branch GIT04/Branch2
```

Check branches:

```bash
git branch
```

---

# Step 5: Modify File in Branch1

Switch to Branch1:

```bash
git checkout GIT04/Branch1
```

Edit `Task4/textfile`

Branch1 Content:

```
Hii ! I am Siva Kavindra Tamilselvan
From Kongu Engineering College ,Perundurai
Computer Science and Design Department
```

Commit changes:

```bash
git add Task4
git commit -m "Edit made in textfile in branch1"
```

---

# Step 6: Modify File in Branch2

Switch to Branch2:

```bash
git checkout GIT04/Branch2
```

Edit `Task4/textfile`

Branch2 Content:

```
Hello ! I am Siva Kavindra Tamilselvan
From Kongu Engineering College , Perundurai
```

Commit changes:

```bash
git add Task4
git commit -m "Edit made in textfile in branch2"
```

---

# Step 7: Merge Branches

Switch to Branch1:

```bash
git checkout GIT04/Branch1
```

Merge Branch2:

```bash
git merge GIT04/Branch2
```

Git shows merge conflict:

```
Auto-merging Task4/textfile
CONFLICT (content): Merge conflict in Task4/textfile
Automatic merge failed; fix conflicts and then commit the result.
```

---

# Step 8: Check Conflict

Check status:

```bash
git status
```

Output:

```
both modified: Task4/textfile
```

Check difference:

```bash
git diff
```

---

# Step 9: Resolve Conflict Manually

Open `Task4/textfile`

Git shows conflict markers:

```
<<<<<<< HEAD
Hii ! I am Siva Kavindra Tamilselvan
From Kongu Engineering College ,Perundurai
Computer Science and Design Department
=======
Hello ! I am Siva Kavindra Tamilselvan
From Kongu Engineering College , Perundurai
>>>>>>> GIT04/Branch2
```

Remove markers and resolve manually:

Final Resolved Content:

```
Hello ! I am Siva Kavindra Tamilselvan
From Kongu Engineering College , Perundurai
Computer Science and Design Department
```

---

# Step 10: Add and Commit Resolution

```bash
git add Task4
git commit -m "Merge conflict resolved"
```

---

# Step 11: Verify Merge

Switch branches:

```bash
git checkout GIT04/Branch2
git checkout GIT04/Branch1
```

Check merge status:

```bash
git merge GIT04/Branch2
```

Output:

```
Already up to date.
```

This confirms merge is successful.

---

# Key Concepts Learned

* Creating branches from same commit
* Simulating merge conflict
* Using git status
* Using git diff
* Manual conflict resolution
* Completing merge commit

---

# Important Notes

* Merge happens only in current branch
* Other branch remains unchanged
* Conflict occurs when same lines modified
* Manual resolution required

---

# Final Git Commands Summary

```bash
git checkout main
git pull origin main

touch textfile

git add Task4
git commit -m "Added textfile"

git branch GIT04/Branch1
git branch GIT04/Branch2

git checkout GIT04/Branch1
# edit file
git add Task4
git commit -m "branch1 edit"

git checkout GIT04/Branch2
# edit file
git add Task4
git commit -m "branch2 edit"

git checkout GIT04/Branch1
git merge GIT04/Branch2

git status
git diff

# resolve conflict

git add Task4
git commit -m "Merge conflict resolved"
```

---

# Outcome

Successfully simulated and resolved merge conflict using Git.


## SCREENSHOTS
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/29183e31-1222-4c03-8a30-18cf6fc27473" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5b7f86d4-b6d6-45a8-acf9-d5601bdb4c0f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3692f103-a1ae-4379-83bd-5c3651f5fa2e" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4cb9a7b9-b8f1-4a26-8b79-c1d1a3330e83" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0e423c65-2e83-4f34-b92c-a0a6de509ef4" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5e503ad5-83ee-4a54-ab5f-b5ddabfb76dd" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8f756cd1-e687-4de8-9df3-5c89516101d8" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/81a899b7-a87b-4819-ae6d-77cc379814c0" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d7e71c40-0eab-4254-a528-af04a34e5a74" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6789af4a-ec4a-481b-a39e-a2b03f853602" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8a926579-234d-4188-8305-1761e618c23f" />



