@echo off
echo Removing Google Analytics and deploying...
git config --global core.pager ""
git add -A
git commit -m "Remove Google Analytics - fix form submission issues"
git push
echo Done!
