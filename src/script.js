// Main application JavaScript

// Utility functions
function handleButtonClick() {
    const resultDiv = document.getElementById('result');
    const button = document.getElementById('test-button');

    button.textContent = 'Clicked!';
    button.disabled = true;

    resultDiv.textContent = 'Button was successfully clicked!';
    resultDiv.style.display = 'block';

    // Re-enable button after 2 seconds
    setTimeout(() => {
        button.textContent = 'Click Me!';
        button.disabled = false;
        resultDiv.style.display = 'none';
    }, 2000);
}

// Form validation and submission
function validateForm(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }

    if (!email || !isValidEmail(email)) {
        errors.push('Please enter a valid email address');
    }

    if (!message || message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }

    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// DOM manipulation utilities
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (content) {
        element.textContent = content;
    }
    return element;
}

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Math utilities for testing
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error('Width and height must be positive numbers');
    }
    return width * height;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const errors = validateForm(formData);

            if (errors.length > 0) {
                alert('Please fix the following errors:\n' + errors.join('\n'));
                return;
            }

            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Export functions for testing (if in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        isValidEmail,
        add,
        multiply,
        calculateArea,
        createElement,
        toggleVisibility
    };
}
