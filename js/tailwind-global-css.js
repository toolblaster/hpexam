/**
 * Global Tailwind CSS Configuration & Custom Styles
 * ----------------------------------------------------------------------
 * This file serves as the Single Source of Truth for the design system.
 * Updated to include specific styles for the "Exam Mode" quiz interface.
 * * 1. Typography (Strictly Inter & Poppins)
 * 2. Custom Components (Flip Cards, Tree Lines, Gradient Text)
 * 3. Layout Stability (Nav Height)
 * 4. Animations & Shadows
 * 5. Skeleton Loading (CLS Prevention)
 * 6. Exam UI Components (New!)
 * ----------------------------------------------------------------------
 */

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],    // Primary Font (Body, UI, Numbers)
                heading: ['Poppins', 'sans-serif'], // Heading Font (H1-H6)
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
             * 1. GLOBAL BASE STYLES
             * --------------------------------------------------------- */
            addBase({
                'html': { 
                    scrollBehavior: 'smooth',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif',
                },
                'body': {
                    fontFamily: 'Inter, sans-serif',
                },
                'h1, h2, h3, h4, h5, h6': {
                    fontFamily: 'Poppins, sans-serif',
                },
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
            });

            /* ---------------------------------------------------------
             * 2. CUSTOM COMPONENTS
             * --------------------------------------------------------- */
            addComponents({
                // Header/Nav fixed height
                '.nav-height': {
                    height: '3.5rem', // 56px
                    minHeight: '3.5rem',
                    contain: 'layout size',
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

                // Gradient Border Accent
                '.gradient-border-top': {
                    position: 'relative',
                    overflow: 'hidden',
                },
                '.gradient-border-top::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
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
                 * 3. FLIP CARD COMPONENT
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
                 * 4. EXAM UI COMPONENTS (NEW)
                 * ----------------------------------------------------- */
                
                // Syllabus Card Style
                '.syllabus-card': {
                    '@apply bg-white rounded-xl p-4 border shadow-sm relative overflow-hidden group hover:shadow-md transition hover:-translate-y-1': {},
                },
                '.syllabus-card-green': {
                    '@apply border-green-300': {},
                },
                '.syllabus-card-blue': {
                    '@apply border-blue-300': {},
                },
                '.syllabus-card-purple': {
                    '@apply border-purple-300': {},
                },

                // Exam Console (Dark Dashboard)
                '.exam-console': {
                    '@apply bg-slate-900 rounded-xl p-4 md:p-5 shadow-lg relative overflow-hidden text-white': {},
                },
                '.console-btn': {
                    '@apply rounded-lg border text-[10px] font-bold transition flex items-center justify-center gap-2 group whitespace-nowrap px-3 py-1.5': {},
                },
                '.console-input': {
                    '@apply bg-slate-800 border border-slate-600 text-white text-xs p-1.5 rounded text-center outline-none focus:border-blue-500': {},
                },

                // Quiz Question Card (Ultra Compact)
                '.quiz-card': {
                    '@apply bg-white rounded-lg shadow-xl border border-slate-300 relative overflow-hidden flex flex-col transition-all duration-300 min-h-[400px]': {},
                },
                '.quiz-option-btn': {
                    '@apply w-full text-left p-2.5 rounded border border-slate-400 hover:border-blue-400 hover:bg-blue-50 transition-all duration-100 text-slate-700 font-medium relative group text-[11px] md:text-xs flex flex-col justify-center h-full shadow-sm bg-slate-50/50': {},
                },
                
                // Toast Notification
                '.toast-visible': {
                    animation: 'toast-fade 3s forwards',
                }
            });
        }
    ]
}
