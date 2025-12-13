HP Exam Prep Hub - Project Documentation

Last Updated: 2025-12-13
Project Type: Static Web Application (SPA-like feel with Multi-page Architecture)
Target Audience: Aspirants of Himachal Pradesh Government Exams (HPRCA, HPPSC, Patwari, etc.)

1. Project Overview

This project is a high-performance, mobile-first educational portal designed to help students prepare for competitive exams in Himachal Pradesh. It focuses on delivering high-density content, rapid load times, and a clean, distraction-free user interface.

Core Philosophy

Mobile-First & High Density: The UI is optimized for small screens, using compact grids and tight spacing to maximize information density without clutter.

Centralized Management: Styles and common components (Header/Footer) are managed via centralized JavaScript files to ensure consistency across all pages.

Zero Build Step: The project runs on standard HTML/JS/CSS without requiring a Node.js build process (uses Tailwind via CDN for simplicity and portability).

2. Technical Architecture

Tech Stack

Markup: HTML5 (Semantic)

Styling: Tailwind CSS (v3.x via CDN)

Scripting: Vanilla JavaScript (ES6+)

Icons: FontAwesome (Free CDN)

Visualization: Chart.js (for land measurement graphs)

Fonts: Google Fonts (Inter for Body, Poppins for Headings)

Directory Structure

/
├── index.html                                      # Main Landing Page (Hub)
├── js/
│   ├── tailwind-global-css.js                      # Global Tailwind Config & Custom Styles
│   └── header-footer.js                            # Shared Navbar & Footer Injection Logic
├── hp-patwari-exam/
│   └── hp-patwari-technical-land-record-and-revenue.html  # Technical Module Page
└── patwari-json-data/                              # Content Data Source
    ├── terminology_data.json
    ├── laws_data.json
    ├── hierarchy_data.json
    ├── tools_data.json
    ├── quiz_data.json
    └── [various_mcq_files].json


3. Key Systems & Modules

A. Global Styling (js/tailwind-global-css.js)

This file is the Single Source of Truth for the design system. It injects the Tailwind configuration directly into the browser.

Typography: Enforces Inter for body text and Poppins for headings (h1-h6).

Custom Components:

.nav-height: Fixed height (3.5rem) to prevent CLS.

.card-hover: Standardized hover lift and shadow effects.

.gradient-text: Global gradient style for key headings.

.flip-card: 3D card logic for terminology flashcards.

B. Shared Layout (js/header-footer.js)

Function: Dynamically injects the Navigation Bar and Footer into <nav id="global-nav"> and <footer id="global-footer">.

CLS Prevention: Includes an immediate script execution to reserve vertical space for the header before the HTML loads, preventing layout shifts.

Context Awareness: Supports relative paths (rootPath) to ensure links work correctly whether you are on the root index.html or a nested page like hp-patwari-exam/....

C. Data Handling

JSON Driven: Content for Terminology, Laws, Hierarchy, Tools, and Quizzes is fetched asynchronously from JSON files.

Dynamic Rendering: JavaScript functions (renderTerms, renderLaws, etc.) parse this JSON and generate the HTML DOM elements on the fly.

4. Page Breakdown

1. The Hub (index.html)

Role: Central navigation point.

Key Sections:

Hero: "Crack Himachal Exams With Confidence" (Gradient Text).

Modules Grid: Links to specific study areas (Revenue, GK, Math, etc.).

Status Indicators: "Active" (Green) vs "Coming Soon" (Lock icon).

2. Technical Guide (hp-patwari-technical-land-record-and-revenue.html)

Location: hp-patwari-exam/ folder.

Role: Deep dive into Land Records subject matter.

Features:

Terminology: 6/7-column grid of flashcards with FontAwesome icons.

Calculator: Real-time Bigha to Acre/Hectare converter.

Hierarchy: Visual tree of the Revenue Department.

MCQ Bank: Interactive quiz system capable of switching between different question JSON files.

5. Design Guidelines for Future Devs

Strict Font Policy: Use only font-sans (Inter) and font-heading (Poppins). Do not introduce Monospace or Serif fonts unless critical for code blocks.

Heading Hierarchy: Always follow H1 -> H2 -> H3. Never skip levels.

Mobile First: Design for mobile (w-full, p-3, text-xs) first, then scale up using md: and lg: prefixes.

Icons: Use FontAwesome classes. For the Terminology section, use the getIconForTerm() helper in the script to ensure consistent icon mapping.

Paths: When adding new pages in subfolders, remember to adjust the rootPath in loadHeaderFooter({ ... rootPath: '..' }).

6. Future Roadmap (To-Do)

[ ] Connect "Coming Soon" modules (GK, Math, English) to real pages.

[ ] Add a search functionality for the Terminology section.

[ ] Implement a dark mode toggle (supported by Tailwind config).
