# Overview

This is a static website for the South Forsyth High School Chess Club. The website serves as an informational hub for club members and prospective members, providing details about meetings, club activities, and general information about the organization. The site features a clean, modern design with a dark theme and chess-inspired visual elements.

## Recent Changes (August 14, 2025)

- Updated all pages to match user's exact text content and layout preferences
- Modified hero sections across pages to use "Play. Learn. Compete." branding
- Updated advantage cards to "Mind Games", "Compete", "Community"
- Meetings page restructured with hero section, gallery of past meetings, and FAQ section
- Gallery includes placeholders for 8 specific image files from past meetings
- Upcoming Meetings page restructured with hero section, specific meeting dates list, and FAQ section
- Meeting dates list includes 5-game series events and special RSVP link for monthly meeting
- Footer updated to "Don't Forget Your Club Permission Form! HERE" across all pages
- All FAQ answers updated to match user's exact text specifications
- Updated color scheme to use South Forsyth High School colors (light navy blue and white)
- Modified all primary colors throughout the site to match school branding
- Fixed JavaScript error with empty anchor links
- Removed past meetings gallery from homepage (kept only on meetings page)
- Updated RSVP link to point to Google Forms
- Changed meetings page gallery title to "Past Meetings"

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The website is built as a static site using modern web technologies:

- **HTML5**: Semantic markup structure across multiple pages (index, about-us, meetings, upcoming-meetings)
- **CSS3**: Custom styling with CSS Grid and Flexbox for responsive layouts
- **JavaScript**: Vanilla JavaScript for interactive features and user experience enhancements
- **Bootstrap 5**: CSS framework for responsive design and component styling with dark theme
- **Font Awesome**: Icon library for chess and navigation icons

## Design System

- **Theme**: Dark theme using Bootstrap's dark mode data attribute (`data-bs-theme="dark"`)
- **Color Scheme**: Utilizes Bootstrap's CSS custom properties for consistent theming
- **Typography**: Bootstrap's typography system with custom font weights
- **Layout**: Responsive grid system with container-based layouts
- **Navigation**: Fixed-position navbar with backdrop blur effects

## JavaScript Architecture

The JavaScript follows a modular approach with initialization functions:

- **Navigation Enhancement**: Dynamic navbar styling based on scroll position
- **Scroll Effects**: Smooth scrolling and visual feedback
- **Banner Management**: Dismissible alert banners
- **UI Components**: Tooltip initialization and animations
- **Active State Management**: Automatic highlighting of current page in navigation

## Styling Approach

- **CSS Custom Properties**: Leverages Bootstrap's CSS variables for theming
- **Progressive Enhancement**: Base functionality works without JavaScript
- **Responsive Design**: Mobile-first approach using Bootstrap's grid system
- **Visual Effects**: CSS transitions, backdrop filters, and gradient backgrounds
- **Chess Theme Integration**: Chess piece icons and chess-board pattern backgrounds

# External Dependencies

## CDN Resources

- **Bootstrap 5**: CSS framework hosted on Replit's CDN (`bootstrap-agent-dark-theme.min.css`)
- **Font Awesome 6.0.0**: Icon library from cdnjs.cloudflare.com
- **Google Fonts**: (Implied through Bootstrap's font stack)

## Browser APIs

- **DOM Manipulation**: Standard DOM APIs for interactive features
- **Scroll Events**: Window scroll API for navbar effects
- **Local Storage**: Potentially used for user preferences (banner dismissal)
- **CSS Grid/Flexbox**: Modern layout APIs for responsive design

## No Backend Dependencies

This is a purely client-side static website with no server-side processing, databases, or external API integrations. All functionality is handled through client-side JavaScript and CSS.