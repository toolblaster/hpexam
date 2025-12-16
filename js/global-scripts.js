/**
 * Global Scripts
 * Centralized logic for UI interactions, utility functions, and future state management.
 * * Features:
 * 1. Back to Top Button (Auto-injects and manages visibility)
 * 2. Breadcrumb Generator (Dynamic navigation paths)
 * 3. Mobile Menu Toggle Listener (Delegate)
 * 4. Future Roadmap: Dark Mode & Font Size preferences
 */

// CENTRALIZED CONFIGURATION
// Use this for all "Home" links to ensure consistency across the site.
window.HP_EXAM_ROOT = "https://hpexam.toolblaster.com";

document.addEventListener('DOMContentLoaded', () => {
    initGlobalFeatures();
});

function initGlobalFeatures() {
    setupBackToTop();
    // Future: setupDarkMode();
}

/**
 * 1. Back to Top Button
 * Automatically injects a button that appears when scrolling down.
 */
function setupBackToTop() {
    // 1. Create the button element
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.ariaLabel = 'Scroll to top';
    btn.className = 'fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer opacity-0 invisible transition-all duration-300 z-50 hover:bg-blue-700 hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10 md:w-12 md:h-12';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up text-sm md:text-base"></i>';
    
    document.body.appendChild(btn);

    // 2. Add scroll listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'invisible');
            btn.classList.add('opacity-100', 'visible');
        } else {
            btn.classList.add('opacity-0', 'invisible');
            btn.classList.remove('opacity-100', 'visible');
        }
    });

    // 3. Add click listener
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 2. Breadcrumb Generator
 * Renders a consistent breadcrumb navigation based on the provided path array.
 * * Usage:
 * renderBreadcrumb('container-id', [
 * { label: 'Home', link: window.HP_EXAM_ROOT },
 * { label: 'Section', link: 'section.html' },
 * { label: 'Current Page', link: '#' }
 * ]);
 */
window.renderBreadcrumb = function(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!items || items.length === 0) {
        container.innerHTML = '';
        return;
    }

    let html = `
    <nav class="flex justify-center md:justify-start mb-3 md:mb-4" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-[10px] md:text-xs font-medium">
    `;

    items.forEach((item, index) => {
        const isLast = index === items.length - 1;
        const isFirst = index === 0;
        
        // Fallback for Home link if not explicitly provided or if relative
        let link = item.link;
        if (isFirst && item.label === 'Home' && (!link || link === '#' || link.startsWith('.'))) {
            link = window.HP_EXAM_ROOT;
        }

        if (isFirst) {
            // Home Icon Item
            html += `
            <li class="inline-flex items-center">
                <a href="${link}" class="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                    <i class="fa-solid fa-house mr-1.5"></i> ${item.label}
                </a>
            </li>`;
        } else {
            // Chevron Separator + Link/Active Item
            html += `
            <li ${isLast ? 'aria-current="page"' : ''}>
                <div class="flex items-center">
                    <i class="fa-solid fa-chevron-right text-slate-300 mx-1 text-[8px]"></i>
                    ${isLast 
                        ? `<span class="ml-1 text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">${item.label}</span>`
                        : `<a href="${link}" class="ml-1 text-slate-400 hover:text-blue-600 transition-colors">${item.label}</a>`
                    }
                </div>
            </li>`;
        }
    });

    html += `
        </ol>
    </nav>`;
    
    container.innerHTML = html;
};

/**
 * Helper: Simple storage wrapper for future use (e.g. Dark Mode)
 */
const AppStorage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { console.warn('LocalStorage error:', e); }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) { return null; }
    }
};
