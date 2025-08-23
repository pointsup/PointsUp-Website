# PowerShell script to deploy the website
Write-Host "Starting deployment..."

# Set git to not use pager
git config --global core.pager ""

# Add all changes
git add -A

# Commit changes
git commit -m "Force redeploy with updated Netlify function"

# Push to trigger Netlify deployment
git push

Write-Host "Deployment triggered successfully!"
