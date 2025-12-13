/**
 * Header & Footer Component Manager
 * Centralizes HTML structure AND CSS classes for global consistency.
 */

// 0. PREVENT CLS: Immediately inject styles to reserve space for the header
// This ensures #global-nav has height before the JS populates it, stopping layout shifts.
(function() {
    const style = document.createElement('style');
    style.textContent = `
        #global-nav {
            min-height: 3.5rem; /* 56px matches h-14/nav-height */
            display: block;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
})();

// 1. Centralized Styles (Edit these to change the look globally)
const GlobalStyles = {
    // Navigation: Static (scrolls with page), White background, Bottom border, Shadow, Fixed Height
    nav: "bg-white border-b border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] nav-height w-full z-50",
    
    // Footer: White background, Top border, Padding
    footer: "bg-white border-t border-slate-200 py-6 mt-auto"
};

// 2. HTML Templates
const AppComponents = {
    footerContent: () => `
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-slate-400 text-[10px] uppercase font-bold tracking-wider font-sans">© 2025 HP Patwari Exam Prep</p>
        </div>
    `,

    navHomeContent: () => `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div class="flex justify-between items-center h-full">
                <!-- Cap Icon Logo -->
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <span class="text-xl font-bold text-slate-900 tracking-tight font-heading">HP Exam <span class="text-blue-600">Hub</span></span>
                </div>
                
                <div class="flex items-center gap-4">
                    <a href="https://hpsssb.hp.gov.in/" target="_blank" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full hover:bg-blue-50 font-sans">
                        Official Site <i class="fa-solid fa-external-link-alt text-[10px]"></i>
                    </a>
                </div>
            </div>
        </div>
    `,

    navTechnicalContent: (rootPath) => `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div class="flex justify-between items-center h-full">
                <div class="flex items-center gap-3">
                    <a href="${rootPath}/index.html" class="flex items-center gap-2 group text-slate-500 hover:text-blue-600 transition">
                        <i class="fa-solid fa-arrow-left text-sm"></i>
                        <span class="text-xs font-bold uppercase tracking-wider hidden sm:block font-heading">Hub</span>
                    </a>
                    <div class="h-4 w-px bg-slate-300 mx-2"></div>
                    <span class="text-base font-bold text-slate-900 tracking-tight font-heading">Technical <span class="text-blue-600">Guide</span></span>
                </div>
                
                <!-- Compact Desktop Menu -->
                <div class="hidden md:flex space-x-1 items-center bg-slate-100 p-1 rounded-lg">
                    <a href="#terminology" class="text-[11px] font-bold text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm px-3 py-1.5 rounded-md transition font-sans">Terms</a>
                    <a href="#measurements" class="text-[11px] font-bold text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm px-3 py-1.5 rounded-md transition font-sans">Calc</a>
                    <a href="#laws" class="text-[11px] font-bold text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm px-3 py-1.5 rounded-md transition font-sans">Laws</a>
                    <a href="#quiz" class="text-[11px] font-bold text-white bg-blue-600 px-3 py-1.5 rounded-md shadow-sm hover:bg-blue-700 transition ml-1 font-sans">
                        MCQ Bank
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-slate-600 p-2 focus:outline-none">
                        <i class="fa-solid fa-bars text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full left-0 top-14 z-40">
            <div class="grid grid-cols-4 p-2 gap-2 text-center">
                <a href="#terminology" class="text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded font-sans">Terms</a>
                <a href="#measurements" class="text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded font-sans">Calc</a>
                <a href="#laws" class="text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded font-sans">Laws</a>
                <a href="#quiz" class="text-[10px] font-bold text-blue-600 bg-blue-50 p-2 rounded font-sans">Quiz</a>
            </div>
        </div>
    `
};

/**
 * Injects Header and Footer into the page and applies global styles.
 * @param {Object} options - { type: 'home' | 'technical', rootPath: string }
 */
window.loadHeaderFooter = function(options) {
    const { type, rootPath } = options || { type: 'home', rootPath: '.' };
    
    // 1. Setup Footer
    const footerEl = document.getElementById('global-footer');
    if (footerEl) {
        footerEl.className = GlobalStyles.footer; // Apply global footer classes
        footerEl.innerHTML = AppComponents.footerContent();
    }

    // 2. Setup Nav
    const navEl = document.getElementById('global-nav');
    if (navEl) {
        navEl.className = GlobalStyles.nav; // Apply global nav classes
        
        if (type === 'home') {
            navEl.innerHTML = AppComponents.navHomeContent();
        } else if (type === 'technical') {
            navEl.innerHTML = AppComponents.navTechnicalContent(rootPath);
            
            // Attach Mobile Menu Listener
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            if (btn && menu) {
                btn.onclick = () => menu.classList.toggle('hidden');
            }
        }
    }
};
