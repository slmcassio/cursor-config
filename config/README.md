# Configuration Setup for Cursor/VS Code

- [Browse this config folder on GitHub](https://github.com/slmcassio/cursor-config/tree/main/config)
This directory contains configuration files and recommended extensions for Cursor (VS Code).

First, navigate to the root of this project in your terminal:

```sh
cd /path/to/your/cloned/cursor-config
```

## Installing Extensions via Command Line

The `extensions-list` file contains a list of recommended Cursor (VS Code) extensions. You can install all of them at once using the following command in your terminal:

```sh
xargs -I {} cursor --install-extension "{}" < config/extensions-list
```

- Make sure the `cursor` command is available in your PATH.
- This will install each extension listed in the file.

## Using Config Files as Symbolic Links

The files in this directory are intended to be used as symbolic links for easy configuration management. This allows you to keep your settings version-controlled and easily portable.

### How to Create Symbolic Links

First, navigate to the root of this project in your terminal:

```sh
cd /path/to/your/cloned/cursor-config
```

Then run the following commands:

```sh
# Link Calva config.edn (for Clojure development)
ln -sf "$(pwd)/config/config.edn" ~/.config/calva/config.edn

# Link Cursor settings.json
ln -sf "$(pwd)/config/settings.json" \
      ~/Library/Application\ Support/Cursor/User/settings.json

# Link Cursor keybindings.json
ln -sf "$(pwd)/config/keybindings.json" \
      ~/Library/Application\ Support/Cursor/User/keybindings.json
```
