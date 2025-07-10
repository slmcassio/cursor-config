# Cursor Config

A collection of configuration files and a shortcut reference sheet for the Cursor (VS Code) editor.

## Configuration Setup

For instructions on installing recommended extensions and setting up configuration files (settings, keybindings, Calva, etc.), see [config/README.md](config/README.md).

## Shortcuts Sheet

Access the live shortcut reference sheet for Cursor and Calva:
[Live Shortcut Reference Sheet for Cursor and Calva](https://slmcassio.github.io/cursor-config)

### Features

- **Searchable**: Type to filter shortcuts by description or keys
- **Responsive**: Works on desktop and mobile devices
- **Organized**: Shortcuts grouped by category with icons
- **Maintainable**: Easy to add, remove, or modify shortcuts
- **Print-optimized**: The sheet is styled for clean printing using your browser's print feature (File → Print or Cmd+P), but there is no dedicated print button.

### Categories

- **General & File Navigation**: Basic file and project navigation
- **Command Palette**: Command palette and command access
- **Editing & Selection**: Text editing and selection tools
- **Window & Editor Management**: Editor group and window management
- **Clojure**: Calva-specific Clojure development shortcuts

### Usage

1. Open `index.html` in a web browser
2. Use the search box to find specific shortcuts
3. Edit `shortcuts-data.js` to modify shortcuts

### Adding New Shortcuts

To add a new shortcut:

1. Open `assets/js/shortcuts-data.js`
2. Find the appropriate category
3. Add a new object to the `shortcuts` array:
   ```javascript
   { keys: ["⌘", "⇧", "p"], description: "Your new shortcut" }
   ```

## File Structure

```
cursor-config/
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

## Additional Notes

- The shortcuts data is stored in `assets/js/shortcuts-data.js`.
- The HTML file `index.html` is the main entry point.
- The CSS file `assets/css/styles.css` contains all styles and custom classes.
- The keybindings file `config/keybindings.json` is used by Cursor.
- The `_config.yml` file is for GitHub Pages.
- The `404.html` page is for handling 404 errors.
