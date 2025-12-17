/**
 * Header & Footer Component Manager
 */

// 0. PREVENT CLS: Reserve space
(function() {
    const style = document.createElement('style');
    style.textContent = `
        #global-nav {
            min-height: 3.5rem;
            display: block;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
})();

// 1. Centralized Styles
const GlobalStyles = {
    // Sticky Top with high Z-Index
    nav: "bg-white border-b border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] nav-height w-full z-50 sticky top-0",
    
    // Footer
    footer: "bg-white border-t border-slate-200 py-6 mt-auto"
};

// 2. HTML Templates
const AppComponents = {
    footerContent: () => `
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-slate-500 text-[10px] uppercase font-bold tracking-wider font-sans">© 2026 HP Exam Hub</p>
        </div>
    `,

    // HOME NAVIGATION
    navHomeContent: () => `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div class="flex justify-between items-center h-full">
                <a href="./" aria-label="HP Exam Hub Home" class="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                        <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <span class="text-xl font-bold text-slate-900 tracking-tight font-heading">HP <span class="text-blue-600">Exam Hub</span></span>
                </a>
                
                <div class="flex items-center gap-4">
                    <a href="https://hpsssb.hp.gov.in/" target="_blank" aria-label="Visit Official HPSSSB Website" class="text-xs font-semibold text-slate-600 hover:text-blue-600 transition flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full hover:bg-blue-50 font-sans">
                        Official Site <i class="fa-solid fa-external-link-alt text-[10px]" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    `,

    // TECHNICAL PAGES NAVIGATION
    navTechnicalContent: (rootPath) => `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div class="flex justify-between items-center h-full">
                <div class="flex items-center gap-3">
                    <a href="${rootPath}/" aria-label="Back to Exam Hub" class="flex items-center gap-2 group text-slate-500 hover:text-blue-600 transition">
                        <i class="fa-solid fa-arrow-left text-sm" aria-hidden="true"></i>
                        <span class="text-xs font-bold uppercase tracking-wider hidden sm:block font-heading">Hub</span>
                    </a>
                    <div class="h-4 w-px bg-slate-300 mx-2"></div>
                    <span class="text-base font-bold text-slate-900 tracking-tight font-heading">Patwari Technical <span class="text-blue-600">Guide</span></span>
                </div>
                
                <div class="hidden md:flex space-x-1 items-center bg-slate-100 p-1 rounded-lg">
                    <a href="${rootPath}/hp-patwari-exam/hp-technical-land-record-and-revenue.html#terminology" class="text-[11px] font-bold text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm px-3 py-1.5 rounded-md transition font-sans">Terms</a>
                    <a href="${rootPath}/hp-patwari-exam/hp-technical-land-record-and-revenue.html#measurements" class="text-[11px] font-bold text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm px-3 py-1.5 rounded-md transition font-sans">Calc</a>
                    <a href="${rootPath}/hp-patwari-exam/hp-technical-land-record-and-revenue.html#laws" class="text-[11px] font-bold text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm px-3 py-1.5 rounded-md transition font-sans">Laws</a>
                    <a href="${rootPath}/hp-patwari-exam/patwari-mock-test/hp-patwari-mock-test-1-land-and-revenue.html" class="text-[11px] font-bold text-white bg-blue-600 px-3 py-1.5 rounded-md shadow-sm hover:bg-blue-700 transition ml-1 font-sans">
                        MCQ Bank
                    </a>
                    <a href="${rootPath}/hp-patwari-exam/hp-patwari-technical-field-study-notes.html" class="text-[11px] font-bold text-slate-700 bg-white border border-slate-300 px-3 py-1.5 rounded-md hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition ml-1 font-sans shadow-sm">
                        <i class="fa-solid fa-book-open mr-1"></i> Notes
                    </a>
                </div>

                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" aria-label="Toggle navigation menu" class="text-slate-600 p-2 focus:outline-none">
                        <i class="fa-solid fa-bars text-lg" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full left-0 top-14 z-40">
            <div class="grid grid-cols-4 p-2 gap-2 text-center">
                <a href="${rootPath}/hp-patwari-exam/hp-technical-land-record-and-revenue.html#terminology" class="text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded font-sans">Terms</a>
                <a href="${rootPath}/hp-patwari-exam/hp-technical-land-record-and-revenue.html#measurements" class="text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded font-sans">Calc</a>
                <a href="${rootPath}/hp-patwari-exam/hp-technical-land-record-and-revenue.html#laws" class="text-[10px] font-bold text-slate-600 bg-slate-50 p-2 rounded font-sans">Laws</a>
                <a href="${rootPath}/hp-patwari-exam/patwari-mock-test/hp-patwari-mock-test-1-land-and-revenue.html" class="text-[10px] font-bold text-blue-600 bg-blue-50 p-2 rounded font-sans">Quiz</a>
                <a href="${rootPath}/hp-patwari-exam/hp-patwari-technical-field-study-notes.html" class="col-span-4 text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200 p-2 rounded font-sans mt-1">
                    <i class="fa-solid fa-book-open mr-1"></i> Study Notes (14 Topics)
                </a>
            </div>
        </div>
    `
};

/**
 * Injects Header and Footer into the page.
 */
window.loadHeaderFooter = function(options) {
    const { type, rootPath } = options || { type: 'home', rootPath: '.' };
    
    // 1. Setup Footer
    const footerEl = document.getElementById('global-footer');
    if (footerEl) {
        footerEl.className = GlobalStyles.footer;
        footerEl.innerHTML = AppComponents.footerContent();
    }

    // 2. Setup Nav
    const navEl = document.getElementById('global-nav');
    if (navEl) {
        navEl.className = GlobalStyles.nav;
        
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

    // 3. Handle Hash Scroll (Fix for cross-page anchor links)
    if (window.location.hash) {
        setTimeout(() => {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }
};
