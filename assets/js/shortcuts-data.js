const shortcutsData = {
    categories: [
        {
            name: "General & File Navigation",
            icon: "file",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ae0fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 icon-file">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>`,
            shortcuts: [
                { keys: ["⌃", "Esc"], description: "List Projects to Open" },
                { keys: ["⌘", "1"], description: "Show/Hide File Explorer" },
                { keys: ["⌘", "0"], description: "Show/Hide Terminal" },
                { keys: ["⇧", "⇧"], description: "Go to File" },
                { keys: ["⌘", "p"], description: "Go to File (alternative)" },
                { keys: ["⌃", "l"], description: "Go to Line/Column" },
                { keys: ["⌘", "↓"], description: "Go to Declaration" },
                { keys: ["⌘", "↑"], description: "Breadcrumbs Selector" }
            ]
        },
        {
            name: "Command Palette",
            icon: "command",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff277e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 icon-command">
                <path d="m18 3-3 3h-3v3l-3 3v3h-3l-3 3"></path>
                <path d="m18 15-3-3h-3v-3l-3-3v-3h-3l-3-3"></path>
            </svg>`,
            shortcuts: [
                { keys: ["⌘", "⇧", "p"], description: "Show All Commands" }
            ]
        },
        {
            name: "Editing & Selection",
            icon: "edit",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 icon-edit">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                <path d="m15 5 4 4"></path>
            </svg>`,
            shortcuts: [
                { keys: ["⌘", "⌥", "↑"], description: "Multiline cursor (Up)" },
                { keys: ["⌘", "⌥", "↓"], description: "Multiline cursor (Down)" },
                { keys: ["⌥", "⌘", "g"], description: "Select Next Match" }
            ]
        },
        {
            name: "Window & Editor Management",
            icon: "window",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 icon-window">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>`,
            shortcuts: [
                { keys: ["⌘", "w", "w"], description: "Close Current Editors" },
                { keys: ["⌘", "w", "g"], description: "Close All Editors In Group" },
                { keys: ["⌘", "w", "a"], description: "Close All Editors" },
                { keys: ["⌘", "w", "r"], description: "Reopen Closed Editor" },
                { keys: ["⌘", "w", "↑"], description: "Move Editor to Group (↑)" },
                { keys: ["⌘", "w", "↓"], description: "Move Editor to Group (↓)" },
                { keys: ["⌘", "w", "←"], description: "Move Editor to Group (←)" },
                { keys: ["⌘", "w", "→"], description: "Move Editor to Group (→)" },
                { keys: ["⌘", "w", "n"], description: "Navigate Between Editor Groups" }
            ]
        },
        {
            name: "Clojure",
            icon: "clojure",
            iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#43d9ad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 icon-clojure">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>`,
            shortcuts: [
                { keys: ["⌃", "⌥", "/"], description: "Sexp: Expand Selection" },
                { keys: ["⌃", "⌥", "↑"], description: "Sexp: Expand Selection" },
                { keys: ["⌃", "⌥", "⇧", "/"], description: "Sexp: Shrink Selection" },
                { keys: ["⌃", "⌥", "↓"], description: "Sexp: Shrink Selection" },
                { keys: ["⌃", "⌥", ","], description: "Sexp: Slurp" },
                { keys: ["⌃", "⌥", "j"], description: "Sexp: Slurp" },
                { keys: ["⌃", "⌥", "⇧", ","], description: "Sexp: Slurp Backward" },
                { keys: ["⌃", "⌥", "⇧", "j"], description: "Sexp: Slurp Backward" },
                { keys: ["⌃", "⌥", "."], description: "Sexp: Barf" },
                { keys: ["⌃", "⌥", "k"], description: "Sexp: Barf" },
                { keys: ["⌃", "⌥", "⇧", "."], description: "Sexp: Barf Backward" },
                { keys: ["⌃", "⌥", "⇧", "k"], description: "Sexp: Barf Backward" },
                { keys: ["⌃", "⌥", "'"], description: "Evaluate: File and Dependencies" },
                { keys: ["⌃", "⌥", "Enter"], description: "Evaluate: Top Level Form" },
                { keys: ["⌃", "⌥", ";"], description: "Form: Evaluate Selection" },
                { keys: ["⌃", "⌥", "["], description: "Show REPL Output View" },
                { keys: ["⌃", "⌥", "]"], description: "Show REPL Menu" },
                { keys: ["⌃", "⌥", "\\"], description: "Manage Clojure LSP Server" }
            ]
        }
    ],
    calvaReplSnippets: [
        {
            name: "Refresh REPL",
            key: "x",
            snippet: "(clojure.tools.namespace.repl/refresh)"
        },
        {
            name: "Refresh-all REPL",
            key: "x+",
            snippet: "(clojure.tools.namespace.repl/refresh-all)"
        },
        {
            name: "Unalias all NS",
            key: "ns-",
            snippet: "(map (partial ns-unalias *ns*) (keys (ns-aliases *ns*)))"
        },
        {
            name: "Run tests on current namespace",
            key: "t",
            snippet: "(clojure.test/run-tests '$ns)"
        },
        {
            name: "Run single test",
            key: "t-",
            snippet: "(clojure.test/run-test-var #'$top-level-defined-symbol)"
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = shortcutsData;
}

// Note: These keybindings are configured on top of the "IntelliJ IDEA Keybindings" plugin
// https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings
// In the future, there will be a version that does not depend on this plugin. 
