# Cursor Config

A collection of configuration files and a shortcut reference sheet for the Cursor (VS Code) editor.

## Configuration Setup

For instructions on installing recommended extensions and setting up configuration files (settings, keybindings, Calva, etc.), see [config/README.md](config/README.md).

## Shortcuts Sheet

Access the live shortcut reference sheet for Cursor and Calva:
[Live Shortcut Reference Sheet for Cursor and Calva](https://slmcassio.github.io/cursor-config)

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
