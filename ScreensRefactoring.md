


> git status
- Gives an overview of tracked as well as untracked files with changes


> git add <relative-file-path>
- To track a file and its changes



Git Local + Server Combination
1. we commit changes on local
2. we push them to server

>git commit -m "screens refactoring file added"  


> git push



** Its a good practise to keep trackind and commiting you local changes and pushing them on the current feature branch** (Every 1-2 hour or 203 files changes, keep committing)



> git pull - fetches branch specific changes from server
- To fetch the latest state of the current branch from github central repo
(This may get you file conflicts which can be hard to resolve.)

Follow this series of commands for git pull:
1. git stash - stash local change
2. run git pull
3. Resolve any conflicts with your existing commited changes
4. git stash pop - Resolve any conflict with the latest pulled code.

> git fetch - repo specific changes from server
Eg. - To fetch all the branches.



Stashing (In the form of Stack - LIFO)
> git stash 
- To stash the local tracked or untracked files and theirs changes (basically uncommited changes)

> git stash list
- To list out the all stashed stack

> git stash pop
- To unstash the recent one stashed changes




Branches

We crate feature branches. Creating branch by developers name is joke of the system. When working on bug fixes, you can create dev name and bug specific branches. E.g. - bug_fixes_g


Before starting any feature, we create a new branch for it.

> git checkout -b <branch-name>
- To create a new branch

> git checkout <branch-name>
- To switch to an existing branch





Merging
- git merge <branch-name>

Common branch - dev

Dev1 - Feature1-a
Dev2 - Feature1-b

Dev1 -

> git checkout dev

> git pull

> git checkout Feature1-a

> git merge dev (to merge the latest changes from other devs. It might cause some conflicts, they will required to be solved, otherwise your code might not work)

> git add --all

> got commit -m "merged the feature 1 part a"

> git push


Dev2 -

> git checkout dev

> git pull

> git checkout Feature1-b

> git merge dev (to merge the latest changes from other devs. It might cause some conflicts, they will required to be solved, otherwise your code might not work)

> git add --all

> got commit -m "merged the feature 1 part b"

> git push







6 guys:


create new branch from your current main branch
> git checkout -b dev
> git push

> git fetch
> git checkout dev
> git pull

screen1
> git checkout -b screen1
git
Work on the code and keep committing

git push


screen2
> git checkout -b screen2
git
Work on the code and keep committing

git push







