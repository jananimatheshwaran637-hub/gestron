# Upload to GitHub

Open this root folder in VS Code. Create an empty GitHub repository named `Nova-Gestrom`. Run these commands in the root terminal:

```bash
git init
git add .
git commit -m "Added practical experiments 1 to 10"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Nova-Gestrom.git
git push -u origin main
```

Replace YOUR_USERNAME. Do not upload real `.env` files or database passwords. Start MongoDB for Experiments 5, 6 and 7. Experiment 9 needs two terminals. Experiment 10 needs a MongoDB Atlas URI.
