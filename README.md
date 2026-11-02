SITEMAP
<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/47840a4e-4a1e-4707-a8d7-4b711add7cda" />
# QuickFix SA Website

## Student Information
- Name: THATO MABOA
- Student Number:ST10537149
- Module: WEDE5020
- Assessment: POE Parts 1, 2 and 3
- Date: November 2026

## Live Website
https://quickfixsa.netlify.app

## Project Overview
This is a 5-page website for QuickFix SA, a proposed home maintenance company based in Gauteng. The website serves as a central digital platform where homeowners, tenants, and landlords can view services, find our two locations, and request a quote. 

## Pages
- **Home (index.html):** Hero section, welcome intro, how it works, and why choose us.
- **About Us (about.html):** Company history, mission, vision, core values, team profiles, and a FAQ accordion.
- **Our Services (services.html):** Filterable service grid using CSS Grid (plumbing, electrical, painting), plus an estimated pricing table.
- **Request a Service (enquiry.html):** Detailed enquiry form with JavaScript validation and AJAX simulation.
- **Contact Us (contact.html):** Contact details for both Johannesburg and Pretoria branches, operating hours, an interactive Leaflet map, and a contact form with mailto email generation.

## Key Features (Part 3)
- **Interactive Map:** Replaced static images with a Leaflet map showing markers for both the Johannesburg and Pretoria branches.
- **Lightbox Gallery:** Users can click on service images to view them larger, complete with Next/Previous arrow navigation.
- **FAQ Accordion:** Smooth open/close functionality on the About page.
- **Live Search:** A dynamic search bar on the Services page filters the service cards as the user types.
- **Form Validation:** Real-time error feedback for invalid emails, phone numbers, or missing fields. 
- **AJAX Submission:** Both forms simulate an asynchronous request to a server before showing a success message.
- **Scroll Animations:** Cards and sections fade in smoothly as the user scrolls down the page.
- **SEO:** Unique title tags, meta descriptions, and keywords on all pages. Includes `robots.txt` and `sitemap.xml`.

# Changelog

## Part 1: HTML Foundation
- Created a 5-page website structure (`index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`) using semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Implemented a horizontal navigation menu and detailed content for a home maintenance company.
- Added the required form on the Enquiry page and two physical locations (Johannesburg and Pretoria) on the Contact page.
- Included tables, lists, and descriptive `alt` text for all images.

## Part 2: CSS Styling and Responsive Design
- Created an external stylesheet (`css/style.css`) and linked it to all HTML pages.
- Added Google Fonts (Roboto) for a professional look and implemented a CSS reset.
- Styled all pages using **CSS Grid** for the service cards, forms, and contact layouts.
- Added a **responsive hamburger menu** for mobile devices, complete with a toggle function.
- Implemented `srcset` and `sizes` on images to ensure they load correctly on different screen sizes.
- Added hover effects, box shadows, and pseudo-classes to enhance the visual design.

## Part 3: JavaScript, SEO, and Deployment
- **Interactive Elements:** 
  - Added a FAQ accordion on the About page.
  - Added a custom image gallery lightbox with Next/Prev arrows and Escape key support.
- **Interactive Map:** Replaced static iframes with a dynamic **Leaflet map** on the Contact page, featuring separate markers for the Johannesburg and Pretoria branches.
- **Dynamic Content:** Added a **live search bar** to the Services page that filters cards as the user types.
- **Form Functionality:** 
  - Implemented real-time validation for both forms (checking name, email format, phone, location, and message length).
  - Added a simulated AJAX request (`fakeAjaxSubmit`) for a smoother user experience.
  - Added a `mailto:` email generator for the contact form.
- **JS Animations:** Added an Intersection Observer script to make page cards and sections fade in smoothly as the user scrolls.
- **SEO:** 
  - Added unique title tags, meta descriptions, and meta keywords to all 5 pages.
  - Created `robots.txt` and `sitemap.xml` in the root directory.
- **Deployment:** Successfully deployed the final QuickFix SA website to Netlify.

## References
Leaflet. (2026). *Leaflet Documentation*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026)

Mozilla Developer Network. (2026). *Web APIs*. Available at: https://developer.mozilla.org/en-US/docs/Web/API (Accessed: 2 November 2026)

World Wide Web Consortium (W3C). (n.d.). *Web Content Accessibility Guidelines (WCAG)*. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ (Accessed: 2 November 2026)

W3Schools. (2026). *JavaScript Tutorial*. Available at: https://www.w3schools.com/js/ (Accessed: 2 November 2026)
