GodStudio Website Structure Documentation
1. Project Overview
The website is built using Next.js 14 with TypeScript and Tailwind CSS, featuring a modern, responsive design focused on digital transformation services.
2. Component Structure
Core Components
Navigation (src/components/Navigation.tsx)
Client Component ('use client')
Features:
Responsive navigation bar
Mobile hamburger menu
Desktop navigation links
"Get Started" CTA button
Dependencies: Headless UI, Heroicons
Footer (src/components/Footer.tsx)
Client Component ('use client')
Features:
Main navigation links
Social media icons (Twitter, LinkedIn)
Copyright information
Dependencies: Next.js Link component
Pages
Homepage (src/app/page.tsx)
Sections:
Hero section with main value proposition
Service tiers overview (3 tiers)
Features:
Call-to-action buttons
Service tier cards
Responsive design
Services Page (src/app/services/page.tsx)
Features:
Detailed service tiers
Pricing information
Feature lists
Three-tier structure:
Foundational ($499/project)
Evolutionary ($3k/month)
Transformational ($15k/month)
About Page (src/app/about/page.tsx)
Sections:
Company story
Statistics (Clients, Projects, Team, Experience)
Core values
Features:
Impact metrics
Value propositions
Team information
Contact Page (src/app/contact/page.tsx)
Features:
Contact form
Contact information
Form fields:
First name
Last name
Email
Phone number
Message
3. Styling System
Global Styles (src/app/globals.css)
Tailwind CSS configuration
Custom color scheme
Dark mode support
Base styles and utilities
Color Scheme
Primary: Indigo (600)
Secondary: Gray (various shades)
Background: White
Text: Gray (900, 600, 500)
4. Page Flow
Entry Point (/)
Users land on homepage
View main value proposition
See service tier overview
Access main navigation
Service Exploration (/services)
Detailed service information
Pricing details
Feature comparisons
Direct path to "Get Started"
Company Information (/about)
Company story
Statistics and impact
Core values
Team information
Contact (/contact)
Contact form
Direct communication channels
Location information
5. Technical Implementation
Client vs Server Components
Client Components:
Navigation
Footer
Server Components:
All page components
Layout components
Dependencies
Next.js 14
TypeScript
Tailwind CSS
Headless UI
Heroicons
Responsive Design
Mobile-first approach
Breakpoints:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
6. Future Enhancements
Form handling implementation
Dark mode support
Animation enhancements
Blog section
Case studies
Client testimonials
Integration with CMS
Analytics implementation