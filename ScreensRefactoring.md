


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



> git pull
- To fetch the latest state of the current branch from github central repo
(This may get you file conflicts which can be hard to resolve.)

Follow this series of commands for git pull:
1. git stash - stash local change
2. run git pull
3. Resolve any conflicts with your existing commited changes
4. git stash pop - Resolve any conflict with the latest pulled code.




Stashing (In the form of Stack - LIFO)
> git stash 
- To stash the local tracked or untracked files and theirs changes (basically uncommited changes)

> git stash list
- To list out the all stashed stack

> git stash pop
- To unstash the recent one stashed changes




Branches

> git checkout -b <branch-name>
- To create a new branch

> git checkout <branch-name>
- To switch to an existing branch






Merging
- 
- git merge <branch-name->

Stashing local changes 






sdfsfsnj



