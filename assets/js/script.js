// Function to render keyboard shortcuts
function renderShortcutKeys(keys, categoryName) {
    // Special rendering for Window & Editor Management
    if (categoryName === 'Window & Editor Management' && keys.length === 3) {
        return `<kbd class="shortcut-key">${keys[0]}</kbd><span class="key-separator">+</span><kbd class="shortcut-key">${keys[1]}</kbd> <span class="key-separator">›</span> <kbd class="shortcut-key">${keys[2]}</kbd>`;
    }
    return keys.map((key, index) => {
        const keyElement = `<kbd class="shortcut-key">${key}</kbd>`;
        const separator = index < keys.length - 1 ? '<span class="key-separator">+</span>' : '';
        return keyElement + separator;
    }).join('');
}

// Helper function to compare key sequences for tiebreaker
function compareKeySequences(a, b) {
    const aStr = a.keys.join(' ');
    const bStr = b.keys.join(' ');
    return aStr.localeCompare(bStr, undefined, { sensitivity: 'base' });
}

// Sort shortcuts in each category by description, then by key sequence
function sortShortcutsData(categories) {
    categories.forEach(category => {
        category.shortcuts.sort((a, b) => {
            const descCompare = a.description.localeCompare(b.description, undefined, { sensitivity: 'base' });
            if (descCompare !== 0) return descCompare;
            return compareKeySequences(a, b);
        });
    });
}

// Sort categories by name, but always put 'Clojure' last
function sortCategoriesWithClojureLast(categories) {
    return categories.slice().sort((a, b) => {
        if (a.name === 'Clojure') return 1;
        if (b.name === 'Clojure') return -1;
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });
}

// Function to render all categories and shortcuts as table rows
function renderTableRows(categories) {
    // Sort before rendering
    sortShortcutsData(categories);
    const orderedCategories = sortCategoriesWithClojureLast(categories);
    let rows = '';
    orderedCategories.forEach(category => {
        category.shortcuts.forEach((shortcut, idx) => {
            rows += '<tr class="table-row">';
            if (idx === 0) {
                rows += `<td class="category-cell" rowspan="${category.shortcuts.length}">
                    <div class="category-header">
                        ${category.iconSvg}
                        <span>${category.name}</span>
                    </div>
                </td>`;
            }
            rows += `<td class="shortcut-cell">
                <div class="shortcut-container">
                    ${renderShortcutKeys(shortcut.keys, category.name)}
                </div>
            </td>`;
            rows += `<td class="description-cell">${shortcut.description}</td>`;
            rows += '</tr>';
        });
    });
    return rows;
}

// Function to initialize the shortcuts table
function initializeShortcutsTable() {
    const tbody = document.querySelector('#shortcuts-table tbody');
    if (!tbody) return;
    tbody.innerHTML = renderTableRows(shortcutsData.categories);
    // Add fade-in animation to rows
    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(10px)';
        row.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, index * 30);
    });
}

// Function to add search functionality
function addSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            const tbody = document.querySelector('#shortcuts-table tbody');
            tbody.innerHTML = '';
            let filteredCategories = shortcutsData.categories.map(category => {
                const filteredShortcuts = category.shortcuts.filter(shortcut => {
                    const text = `${category.name} ${shortcut.keys.join(' ')} ${shortcut.description}`.toLowerCase();
                    return text.includes(searchTerm);
                });
                return filteredShortcuts.length > 0 ? { ...category, shortcuts: filteredShortcuts } : null;
            }).filter(Boolean);
            if (filteredCategories.length === 0 && searchTerm) {
                tbody.innerHTML = `<tr id="no-results"><td colspan="3" class="text-center py-12 text-slate-400">
                    <svg class="mx-auto h-12 w-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
                    </svg>
                    <p class="text-lg font-medium">No shortcuts found</p>
                    <p class="text-sm">Try a different search term</p>
                </td></tr>`;
            } else {
                tbody.innerHTML = renderTableRows(filteredCategories);
            }
        }, 150);
    });
}

// Function to add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('search-input');
            if (searchInput && searchInput.value) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
        }
    });
}

// Function to add smooth scrolling and other enhancements
function addEnhancements() {
    const tbody = document.querySelector('#shortcuts-table tbody');
    if (tbody) {
        tbody.style.opacity = '0';
        tbody.style.transform = 'translateY(20px)';
        tbody.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            tbody.style.opacity = '1';
            tbody.style.transform = 'translateY(0)';
        }, 100);
    }
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease';
        });
        header.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeShortcutsTable();
    addSearchFunctionality();
    addKeyboardShortcuts();
    addEnhancements();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    }
}); 
