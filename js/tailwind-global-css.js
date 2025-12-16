/**
 * Global Tailwind CSS Configuration & Custom Styles
 * ----------------------------------------------------------------------
 * This file serves as the Single Source of Truth for the design system.
 * Updated to include specific styles for the "Exam Mode" quiz interface.
 * 1. Typography (Strictly Inter & Poppins)
 * 2. Custom Components (Flip Cards, Tree Lines, Gradient Text)
 * 3. Layout Stability (Nav Height)
 * 4. Animations & Shadows
 * 5. Skeleton Loading (CLS Prevention)
 * 6. Exam UI Components (New!)
 * 7. GLOBAL BASE STYLES (Centralized CSS replacement)
 * 8. GUIDE PAGE COMPONENTS (Reusable Sidebar)
 * 9. BADGE COMPONENTS (New! For small tags/labels)
 * ----------------------------------------------------------------------
 */

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],    // Primary Font (Body, UI, Numbers)
                heading: ['Poppins', 'sans-serif'], // Heading Font (H1-H6)
                hindi: ['Noto Sans Devanagari', 'sans-serif'], // Hindi Font
            },
            boxShadow: {
                'smooth': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                'smooth-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
                'glow': '0 0 15px rgba(59, 130, 246, 0.15)',
            },
            keyframes: {
                'skeleton-loading': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-out': {
                    '0%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { opacity: '0' },
                }
            },
            animation: {
                'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'skeleton': 'skeleton-loading 1.5s infinite',
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
                'toast-fade': 'fade-out 3s forwards',
            }
        }
    },
    plugins: [
        function({ addBase, addComponents, addUtilities }) {
            
            /* ---------------------------------------------------------
             * 1. GLOBAL BASE STYLES (Previously in global-styles.css)
             * --------------------------------------------------------- */
            addBase({
                'html': { 
                    scrollBehavior: 'smooth',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                    scrollPaddingTop: '80px', /* Crucial for Sticky Header offset */
                },
                'body': {
                    fontFamily: 'Inter, sans-serif',
                },
                'h1, h2, h3, h4, h5, h6': {
                    fontFamily: 'Poppins, sans-serif',
                },
                /* Custom Scrollbar - Global Default */
                '::-webkit-scrollbar': { 
                    width: '6px',
                    height: '6px'
                },
                '::-webkit-scrollbar-track': { 
                    background: 'transparent' 
                },
                '::-webkit-scrollbar-thumb': { 
                    background: '#cbd5e1', 
                    borderRadius: '10px' 
                },
                '::-webkit-scrollbar-thumb:hover': { 
                    background: '#94a3b8' 
                },
                
                /* RICH TEXT CONTENT STYLING (For Study Notes) */
                '.note-content p': { 
                    marginBottom: '0.75rem', 
                    lineHeight: '1.6', 
                },
                '.note-content ul': { 
                    marginLeft: '1.2rem', 
                    listStyleType: 'disc', 
                    marginBottom: '0.75rem', 
                },
                '.note-content ol': { 
                    marginLeft: '1.2rem', 
                    listStyleType: 'decimal', 
                    marginBottom: '0.75rem', 
                },
                '.note-content li': { 
                    marginBottom: '0.25rem', 
                },
                '.note-content strong': { 
                    color: '#1e293b', 
                    fontWeight: '700', 
                },
            });

            /* ---------------------------------------------------------
             * 2. CUSTOM UTILITIES (New Additions)
             * --------------------------------------------------------- */
            addUtilities({
                // Hide Scrollbar (keep functionality)
                '.scrollbar-hide': {
                    '-ms-overflow-style': 'none',  /* IE and Edge */
                    'scrollbar-width': 'none',  /* Firefox */
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                },
                
                // Thin Scrollbar (Specific override)
                '.scrollbar-thin': {
                    'scrollbar-width': 'thin',
                    '&::-webkit-scrollbar': {
                        width: '4px',
                        height: '4px'
                    }
                }
            });

            /* ---------------------------------------------------------
             * 3. CUSTOM COMPONENTS
             * --------------------------------------------------------- */
            addComponents({
                // Header/Nav fixed height
                '.nav-height': {
                    height: '3.5rem', // 56px
                    minHeight: '3.5rem',
                    contain: 'layout size',
                },
                
                // Helper utility for hindi font
                '.font-hindi': {
                     fontFamily: 'Noto Sans Devanagari, sans-serif',
                },

                // Compact Card Hover Effect
                '.card-hover': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '@apply hover:-translate-y-1 hover:shadow-smooth-hover border border-slate-200/60': {}, 
                },

                // GLOBAL GRADIENT TEXT
                '.gradient-text': {
                    backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #06b6d4 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: '800',
                    display: 'inline-block',
                },

                // Tree Line
                '.tree-line': {
                    position: 'relative',
                },
                '.tree-line::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '50%',
                    width: '1px', 
                    backgroundColor: '#e2e8f0', 
                    transform: 'translateX(-50%)',
                    zIndex: '0',
                },

                // SKELETON LOADER
                '.skeleton': {
                    backgroundColor: '#e2e8f0',
                    backgroundImage: 'linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'skeleton-loading 1.5s infinite',
                },

                /* -----------------------------------------------------
                 * 4. FLIP CARD COMPONENT
                 * ----------------------------------------------------- */
                '.flip-card': {
                    perspective: '1000px',
                    cursor: 'pointer',
                    height: '11rem',
                },
                '.flip-card-inner': {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformStyle: 'preserve-3d',
                },
                '.flip-card-inner.is-flipped': {
                    transform: 'rotateY(180deg)',
                },
                '.flip-card-front, .flip-card-back': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '0.75rem', 
                    padding: '1rem',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    borderWidth: '1px',
                },
                '.flip-card-front': {
                    backgroundColor: 'white',
                    borderColor: '#f1f5f9',
                },
                '.flip-card-back': {
                    backgroundColor: '#0f172a',
                    color: 'white',
                    borderColor: '#1e293b',
                    transform: 'rotateY(180deg)',
                },

                /* -----------------------------------------------------
                 * 5. EXAM UI COMPONENTS
                 * ----------------------------------------------------- */
                
                // Syllabus Card Style
                '.syllabus-card': {
                    '@apply bg-white rounded-xl p-4 border shadow-sm relative overflow-hidden group hover:shadow-md transition hover:-translate-y-1': {},
                },
                // Exam Console (Dark Dashboard)
                '.exam-console': {
                    '@apply bg-slate-900 rounded-xl p-4 md:p-5 shadow-lg relative overflow-hidden text-white': {},
                },
                // Quiz Question Card (Ultra Compact)
                '.quiz-card': {
                    '@apply bg-white rounded-lg shadow-xl border border-slate-300 relative overflow-hidden flex flex-col transition-all duration-300 min-h-[400px]': {},
                },
                '.quiz-option-btn': {
                    '@apply w-full text-left p-2.5 rounded border border-slate-400 hover:border-blue-400 hover:bg-blue-50 transition-all duration-100 text-slate-700 font-medium relative group text-[11px] md:text-xs flex flex-col justify-center h-full shadow-sm bg-slate-50/50': {},
                },
                
                // Toast Notification Animation Class
                '.toast-visible': {
                    animation: 'toast-fade 3s forwards',
                },
                
                /* -----------------------------------------------------
                 * 6. GUIDE PAGE COMPONENTS (Reusable Sidebar)
                 * ----------------------------------------------------- */
                '.guide-sidebar': {
                     '@apply bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin': {},
                },
                '.mobile-select-container': {
                     '@apply lg:hidden col-span-1 sticky top-[60px] z-20 bg-slate-50 py-2 -mx-2 px-2 shadow-sm transition-all': {},
                },

                /* -----------------------------------------------------
                 * 7. BADGE COMPONENTS (Standardized Tags)
                 * ----------------------------------------------------- */
                '.badge': {
                    '@apply inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold border tracking-wide': {},
                },
                '.badge-blue': {
                    '@apply bg-blue-50 text-blue-700 border-blue-100': {},
                },
                '.badge-green': {
                    '@apply bg-green-50 text-green-700 border-green-200': {},
                },
                '.badge-slate': {
                    '@apply bg-slate-100 text-slate-500 border-slate-200': {},
                },
                '.badge-purple': {
                    '@apply bg-purple-50 text-purple-700 border-purple-100': {},
                }
            });
        }
    ]
}
