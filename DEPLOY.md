# Deploy Lunar to GitHub Pages

## Option 1: GitHub Actions (Recommended)

The project is already configured with GitHub Actions for automatic deployment.

### Steps:

1. **Create a GitHub repository**
   ```bash
   gh repo create lunar --public --source=. --remote=origin --push
   ```
   
   Or manually:
   - Go to https://github.com/new
   - Create a new repository named "lunar"
   - Copy the repository URL
   
2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lunar.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source**: GitHub Actions
   - Pages will deploy automatically when the workflow runs

4. **Access your site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/lunar/`

---

## Option 2: Manual Deploy (dist folder)

If you prefer to manually deploy the built files:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages package**
   ```bash
   npm install -D gh-pages
   npx gh-pages -d dist
   ```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages → / (root)

---

## Notes

- The site uses client-side routing, so it works perfectly on GitHub Pages
- All assets are bundled, no external dependencies needed at runtime
- Custom domain can be configured in Settings → Pages → Custom domain
