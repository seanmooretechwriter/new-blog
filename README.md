# Simple Blog

A minimal, old-school blog built with Eleventy. Fast, clean, and focused on content.

## Features

- Clean, readable typography
- RSS feed support
- Zero JavaScript
- Mobile responsive
- Fast loading

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Visit http://localhost:8080 to view the site locally.

## Deployment to Netlify

### Option 1: GitHub + Netlify (Recommended)

1. Push this code to a GitHub repository
2. Go to [Netlify](https://netlify.com) and sign up/log in
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Manual Deploy

1. Run `npm run build` locally
2. Drag and drop the `_site` folder to Netlify's deploy interface

## Customization

- Edit `_data/metadata.json` for site information
- Add posts to the `posts/` directory
- Modify styles in `css/style.css`
- Update layouts in `_includes/`

## Project Structure

```
├── _data/
│   └── metadata.json     # Site metadata
├── _includes/
│   ├── base.njk         # Base layout template
│   └── post.njk         # Post layout template
├── css/
│   └── style.css        # Minimal styles
├── posts/
│   └── welcome.md       # Sample blog post
├── .eleventy.js         # Eleventy configuration
├── feed.xml             # RSS feed template
├── index.md             # Homepage
├── netlify.toml         # Netlify build settings
└── package.json         # Dependencies and scripts
```