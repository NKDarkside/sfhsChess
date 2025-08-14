// JavaScript for South Forsyth High School Chess Club Website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeNavigation();
    initializeScrollEffects();
    initializeBannerDismiss();
    initializeTooltips();
    initializeAnimations();
    
    console.log('South Forsyth High School Chess Club website loaded successfully!');
});

// Navigation Enhancement
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.backgroundColor = 'rgba(var(--bs-dark-rgb), 0.98)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.backgroundColor = 'rgba(var(--bs-dark-rgb), 0.95)';
        }
    });
    
    // Highlight active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth Scroll Effects
function initializeScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Skip empty anchors or just "#"
            if (!href || href === '#') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    document.querySelectorAll('.card, .hero-section').forEach(el => {
        observer.observe(el);
    });
}

// Banner Dismiss Functionality
function initializeBannerDismiss() {
    const banner = document.getElementById('closingBanner');
    if (banner) {
        // Check if banner was previously dismissed
        if (localStorage.getItem('bannerDismissed') === 'true') {
            banner.style.display = 'none';
        }
        
        // Handle dismiss button
        const dismissBtn = banner.querySelector('.btn-close');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', function() {
                localStorage.setItem('bannerDismissed', 'true');
                banner.style.display = 'none';
            });
        }
    }
}

// Initialize Bootstrap Tooltips
function initializeTooltips() {
    // Enable tooltips if Bootstrap tooltip component is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

// Animation Effects
function initializeAnimations() {
    // Add CSS class for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .card, .hero-section {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .hero-chess-board {
            animation-delay: 0.5s;
        }
    `;
    document.head.appendChild(style);
}

// FAQ Accordion Enhancement
function enhanceFAQ() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add custom behavior if needed
            const target = this.getAttribute('data-bs-target');
            const targetElement = document.querySelector(target);
            
            if (targetElement) {
                // Custom animation or tracking can be added here
                console.log('FAQ item opened:', this.textContent.trim());
            }
        });
    });
}

// Meeting Card Interactions
function initializeMeetingCards() {
    const meetingCards = document.querySelectorAll('.card[data-meeting]');
    
    meetingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Utility Functions
function getCurrentDate() {
    return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatMeetingTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}

// Form Validation (for future contact forms)
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Local Storage Utilities
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function loadFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Performance Monitoring
if ('performance' in window && 'measure' in window.performance) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }, 0);
    });
}

// Accessibility Enhancements
function enhanceAccessibility() {
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
    
    // Keyboard navigation for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (!card.querySelector('a, button')) {
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.click();
                }
            });
        }
    });
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Export functions for potential future modules
window.ChessClub = {
    initializeNavigation,
    initializeScrollEffects,
    enhanceFAQ,
    validateForm,
    saveToLocalStorage,
    loadFromLocalStorage
};
