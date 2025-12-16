/**
 * Exclusive Components Manager
 * Centralizes reusable high-level UI components like Page Headers.
 */

const ExclusiveStyles = {
    // TWEAK: Removed 'sticky top-0' and 'backdrop-blur'. 
    // This makes the H1 header scroll naturally with the page content.
    // TWEAK: Changed z-index to lower (z-10) as it doesn't need to overlay anything.
    pageHeader: "bg-white border-b border-slate-300 py-3 md:py-4 relative z-10 shadow-sm w-full"
};

const ExclusiveComponents = {
    // STANDARDIZED PAGE HEADER (H1)
    pageHeader: (config) => {
        const { 
            titleHtml,      
            subtitle,       
            mobileSubtitle, 
            rightContent    
        } = config;

        return `
        <header class="${ExclusiveStyles.pageHeader}" id="static-h1-header">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumb Container (Filled by Global Scripts) -->
                <div id="breadcrumb-container" class="mb-2 scale-90 origin-top-left empty:hidden"></div>

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
                    
                    <!-- Right Side Actions -->
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
 * Renders the Standard Page Header.
 */
window.renderPageHeader = function(containerId, config) {
    const container = document.getElementById(containerId);
    if (container) {
        container.outerHTML = ExclusiveComponents.pageHeader(config);
    }
};
