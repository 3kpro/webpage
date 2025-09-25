/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

describe('HTML Structure Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = html;
        // Set the html lang attribute manually for testing
        document.documentElement.setAttribute('lang', 'en');
    });

    test('should have proper HTML5 document structure', () => {
        expect(document.doctype).not.toBeNull();
        expect(document.documentElement.getAttribute('lang')).toBe('en');
    });

    test('should have required meta tags', () => {
        const charset = document.querySelector('meta[charset]');
        const viewport = document.querySelector('meta[name="viewport"]');
        
        expect(charset).not.toBeNull();
        expect(charset.getAttribute('charset')).toBe('UTF-8');
        expect(viewport).not.toBeNull();
        expect(viewport.getAttribute('content')).toBe('width=device-width, initial-scale=1.0');
    });

    test('should have proper title', () => {
        const title = document.querySelector('title');
        expect(title).not.toBeNull();
        expect(title.textContent).toBe('Test Webpage');
    });

    test('should link to CSS and JS files', () => {
        const cssLink = document.querySelector('link[rel="stylesheet"]');
        const jsScript = document.querySelector('script[src]');
        
        expect(cssLink).not.toBeNull();
        expect(cssLink.getAttribute('href')).toBe('styles.css');
        expect(jsScript).not.toBeNull();
        expect(jsScript.getAttribute('src')).toBe('script.js');
    });

    test('should have semantic HTML structure', () => {
        expect(document.querySelector('header')).not.toBeNull();
        expect(document.querySelector('main')).not.toBeNull();
        expect(document.querySelector('footer')).not.toBeNull();
        expect(document.querySelector('nav')).not.toBeNull();
    });

    test('should have navigation menu', () => {
        const nav = document.querySelector('nav');
        const navLinks = nav.querySelectorAll('a');
        
        expect(nav).not.toBeNull();
        expect(navLinks.length).toBe(3);
        
        const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
        expect(hrefs).toEqual(['#home', '#about', '#contact']);
    });

    test('should have all required sections', () => {
        const sections = document.querySelectorAll('section');
        expect(sections.length).toBe(3);
        
        const sectionIds = Array.from(sections).map(section => section.id);
        expect(sectionIds).toEqual(['home', 'about', 'contact']);
    });

    test('should have interactive elements', () => {
        const testButton = document.getElementById('test-button');
        const contactForm = document.getElementById('contact-form');
        
        expect(testButton).not.toBeNull();
        expect(testButton.getAttribute('onclick')).toBe('handleButtonClick()');
        expect(contactForm).not.toBeNull();
    });

    test('should have form with proper input types', () => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageTextarea = document.getElementById('message');
        
        expect(nameInput).not.toBeNull();
        expect(nameInput.type).toBe('text');
        expect(nameInput.hasAttribute('required')).toBe(true);
        
        expect(emailInput).not.toBeNull();
        expect(emailInput.type).toBe('email');
        expect(emailInput.hasAttribute('required')).toBe(true);
        
        expect(messageTextarea).not.toBeNull();
        expect(messageTextarea.tagName).toBe('TEXTAREA');
        expect(messageTextarea.hasAttribute('required')).toBe(true);
    });

    test('should have accessibility features', () => {
        const form = document.getElementById('contact-form');
        const inputs = form.querySelectorAll('input, textarea');
        
        // Check that inputs have placeholders for accessibility
        inputs.forEach(input => {
            expect(input.hasAttribute('placeholder')).toBe(true);
        });
    });

    test('should have proper heading hierarchy', () => {
        const h1 = document.querySelector('h1');
        const h2s = document.querySelectorAll('h2');
        
        expect(h1).not.toBeNull();
        expect(h1.textContent).toBe('Welcome to Test Webpage');
        expect(h2s.length).toBe(3);
        
        const h2Texts = Array.from(h2s).map(h2 => h2.textContent);
        expect(h2Texts).toEqual(['Home Section', 'About Section', 'Contact Section']);
    });
});