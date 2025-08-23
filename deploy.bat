@echo off
echo Starting deployment...

git config --global core.pager ""
git add -A
git commit -m "Fix Netlify function and improve error handling"
git push

echo Deployment complete!
pause
