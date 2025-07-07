# Shortcuts Sheet

A clean, organized shortcut reference sheet for Cursor and Calva.

## 🚀 GitHub Pages Deployment

This project is ready for GitHub Pages deployment:

1. Create a new GitHub repository
2. Copy all files from this folder to your repository root
3. Go to Settings → Pages
4. Source: Deploy from a branch
5. Branch: `main` (or your default branch)
6. Folder: `/` (root)
7. Save and wait for deployment

Your site will be available at: `https://yourusername.github.io/your-repo-name`

## File Structure

```
shortcut-config/
├── assets/
│   ├── css/
│   │   └── styles.css          # All CSS styles and custom classes
│   └── js/
│       ├── script.js           # JavaScript functionality for rendering and interactivity
│       └── shortcuts-data.js   # Data structure containing all shortcuts
├── pages/
│   └── 404.html               # 404 error page
├── config/
│   ├── _config.yml            # GitHub Pages configuration
│   └── keybindings.json       # Cursor keybindings file
├── index.html                 # Main HTML file with clean structure
└── README.md                  # This documentation file
```

## Features

- **Searchable**: Type to filter shortcuts by description or keys
- **Printable**: Clean layout optimized for printing
- **Responsive**: Works on desktop and mobile devices
- **Organized**: Shortcuts grouped by category with icons
- **Maintainable**: Easy to add, remove, or modify shortcuts

## Usage

1. Open `index.html` in a web browser
2. Use the search box to find specific shortcuts
3. Click "Print" to print the sheet
4. Edit `shortcuts-data.js` to modify shortcuts

## Adding New Shortcuts

To add a new shortcut:

1. Open `assets/js/shortcuts-data.js`
2. Find the appropriate category
3. Add a new object to the `shortcuts` array:
   ```javascript
   { keys: ["⌘", "⇧", "p"], description: "Your new shortcut" }
   ```

## Categories

- **General & File Navigation**: Basic file and project navigation
- **Command Palette**: Command palette and command access
- **Editing & Selection**: Text editing and selection tools
- **Window & Editor Management**: Editor group and window management
- **Clojure**: Calva-specific Clojure development shortcuts 