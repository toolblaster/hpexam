HP Patwari Exam Project Documentation

Project Overview

This project is a comprehensive educational resource for the HP Patwari Exam, focusing on Land Records and Revenue technical knowledge. It features interactive guides, mock tests, and detailed study notes.

Technical Architecture (Single Source of Truth)

The project minimizes external CSS files by leveraging a customized Tailwind CSS configuration injected via JavaScript. This approach acts as a "Single Source of Truth" for the design system.

Directory Structure & File Purposes

js/ (Core Logic & Styling)

tailwind-global-css.js Purpose: The central styling engine. Instead of a standard .css file, this JS file configures Tailwind and injects custom CSS rules directly.

Key Features:

Typography: Defines global fonts (Inter for body, Poppins for headings, Noto Sans Devanagari for Hindi).

Global Styles (addBase): Handles html scroll behavior, scroll padding offsets (for sticky headers), and custom scrollbar styling.

Custom Components (addComponents):

.nav-height: Enforces consistent navbar height across pages.

.flip-card: specialized 3D flip animation for terminology cards.

.exam-console: Styles for the mock test dashboard.

.syllabus-card: Color-coded card components for exam topics.

New Guide Components: * .guide-sidebar: Standardizes the sticky sidebar look for study notes.

.mobile-select-container: Standardizes the sticky mobile dropdown container.

Utilities (addUtilities):

.scrollbar-hide: Hides scrollbars for clean horizontal scrolling lists.

.scrollbar-thin: Custom thin scrollbar for sidebars.

header-footer.js Purpose: Manages the global Main Navigation and Footer injection.

Key Features:

Sticky Navigation: Sets the main nav to sticky top-0 with a high z-index so it stays visible while scrolling.

Dynamic Injection: Allows any page to call window.loadHeaderFooter() to instantly render the standard nav/footer without code duplication.

Context Awareness: Can render different nav states (e.g., 'Home' vs 'Technical Guide' sub-menus).

exclusive-components.js Purpose: Handles high-level, page-specific components that are distinct from the global nav. Primarily used for the Page Header (H1).

Key Features:

Static Page Header: Renders the H1 title area that sits below the main nav. It is configured to scroll away naturally (static positioning) as the user scrolls down, distinguishing it from the sticky main nav.

Modularity: Allows specific pages (like Mock Tests or Study Notes) to inject a custom H1 with subtitles and action buttons while keeping the underlying code centralized.

global-scripts.js Purpose: Utility functions shared across the entire application.

Key Features:

Breadcrumb Generation: renderBreadcrumb() dynamically builds navigation paths.

Helper Functions: Common logic for data formatting or minor UI interactions not covered by specific components.

Usage Guide for Developers

Adding a New Page:

Include the Tailwind CDN script.

Import js/tailwind-global-css.js immediately after to apply the theme.

Import js/header-footer.js, js/exclusive-components.js, and js/global-scripts.js in that order.

Add empty container divs: <nav id="global-nav"></nav>, <div id="dynamic-page-header"></div>, <footer id="global-footer"></footer>.

Initialize them in a script at the bottom of the body.

Modifying Styles:

Do not create a new CSS file.

Open js/tailwind-global-css.js.

If adding a generic utility (like a specific border), add it to addUtilities.

If styling a complex widget (like a new card type), add it to addComponents.

If changing global defaults (like body font size), edit addBase.

Header Behavior Changes:

To change the Main Nav behavior (e.g., make it static instead of sticky), edit the GlobalStyles.nav string in js/header-footer.js.

To change the Page Header (H1) behavior, edit the ExclusiveStyles.pageHeader string in js/exclusive-components.js.

Documentation updated: Dec 16, 2025
