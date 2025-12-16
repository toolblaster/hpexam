/**
 * Exclusive Components Manager
 * Centralizes reusable high-level UI components like Page Headers, Hero sections, etc.
 * Separated from header-footer.js for better modularity.
 */

const ExclusiveStyles = {
    // Page Header (H1 Area): Sticky, Glassmorphism, Bottom Border
    pageHeader: "bg-white border-b border-slate-300 py-3 md:py-4 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/95"
};

const ExclusiveComponents = {
    // STANDARDIZED PAGE HEADER (H1)
    // Centralizes the Hero Logic across Mock Tests, Study Notes, and Technical Guide
    pageHeader: (config) => {
        const { 
            titleHtml,      // Support HTML for Gradient Text spans
            subtitle,       // Desktop Subtitle
            mobileSubtitle, // Optional Mobile Short Subtitle
            rightContent    // HTML for Buttons/Tags on the right
        } = config;

        return `
        <header class="${ExclusiveStyles.pageHeader}">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumb Container (Filled by Global Scripts) -->
                <div id="breadcrumb-container" class="mb-2 scale-90 origin-top-left"></div>

                <div class="flex flex-col md:flex-row md:items-end justify-between gap-3">
                    <div>
                        <h1 class="text-xl md:text-2xl font-extrabold font-heading text-slate-900 leading-tight">
                            ${titleHtml}
                        </h1>
                        <p class="text-[11px] md:text-xs text-slate-500 mt-1 max-w-2xl font-medium leading-relaxed hidden sm:block">
                            ${subtitle}
                        </p>
                        ${mobileSubtitle ? `
                        <p class="text-[10px] text-slate-500 sm:hidden mt-1">
                            ${mobileSubtitle}
                        </p>` : ''}
                    </div>
                    
                    <!-- Right Side Actions (Buttons, Tags, etc.) -->
                    ${rightContent ? `
                    <div class="flex-shrink-0">
                        ${rightContent}
                    </div>` : ''}
                </div>
            </div>
        </header>
        `;
    }
};

/**
 * Renders the Standard Page Header into a specific container.
 * This global function is called by individual pages to inject the header.
 */
window.renderPageHeader = function(containerId, config) {
    const container = document.getElementById(containerId);
    if (container) {
        container.outerHTML = ExclusiveComponents.pageHeader(config);
    }
};
