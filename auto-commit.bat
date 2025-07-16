@echo off
REM Stage everything
git add .

REM Commit any changes
git commit -m "Auto commit from Cursor"

REM Pull from remote and auto-resolve conflicts
git pull --rebase --autostash

REM Push to remote
git push
