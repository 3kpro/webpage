/**
 * @jest-environment jsdom
 */

// Import the functions to test
const {
    validateForm,
    isValidEmail,
    add,
    multiply,
    calculateArea,
    createElement,
    toggleVisibility
} = require('../src/script.js');

describe('Math Utilities', () => {
    test('add function should correctly add two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
        expect(add(100, 200)).toBe(300);
    });

    test('multiply function should correctly multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(10, 10)).toBe(100);
    });

    test('calculateArea should return correct area', () => {
        expect(calculateArea(5, 4)).toBe(20);
        expect(calculateArea(10, 10)).toBe(100);
        expect(calculateArea(2.5, 4)).toBe(10);
    });

    test('calculateArea should throw error for invalid dimensions', () => {
        expect(() => calculateArea(0, 5)).toThrow('Width and height must be positive numbers');
        expect(() => calculateArea(-1, 5)).toThrow('Width and height must be positive numbers');
        expect(() => calculateArea(5, -2)).toThrow('Width and height must be positive numbers');
    });
});

describe('Email Validation', () => {
    test('isValidEmail should validate correct email formats', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
        expect(isValidEmail('firstname+lastname@example.com')).toBe(true);
    });

    test('isValidEmail should reject invalid email formats', () => {
        expect(isValidEmail('invalid-email')).toBe(false);
        expect(isValidEmail('@example.com')).toBe(false);
        expect(isValidEmail('test@')).toBe(false);
        expect(isValidEmail('test.example.com')).toBe(false);
        expect(isValidEmail('')).toBe(false);
    });
});

describe('Form Validation', () => {
    test('validateForm should return no errors for valid data', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'john@example.com');
        formData.append('message', 'This is a valid message with enough characters.');

        const errors = validateForm(formData);
        expect(errors).toHaveLength(0);
    });

    test('validateForm should return errors for invalid name', () => {
        const formData = new FormData();
        formData.append('name', 'A'); // Too short
        formData.append('email', 'john@example.com');
        formData.append('message', 'This is a valid message.');

        const errors = validateForm(formData);
        expect(errors).toContain('Name must be at least 2 characters long');
    });

    test('validateForm should return errors for invalid email', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'invalid-email');
        formData.append('message', 'This is a valid message.');

        const errors = validateForm(formData);
        expect(errors).toContain('Please enter a valid email address');
    });

    test('validateForm should return errors for short message', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'john@example.com');
        formData.append('message', 'Short'); // Too short

        const errors = validateForm(formData);
        expect(errors).toContain('Message must be at least 10 characters long');
    });

    test('validateForm should return multiple errors', () => {
        const formData = new FormData();
        formData.append('name', '');
        formData.append('email', 'invalid');
        formData.append('message', 'Short');

        const errors = validateForm(formData);
        expect(errors).toHaveLength(3);
    });
});

describe('DOM Manipulation', () => {
    beforeEach(() => {
        // Clear the DOM before each test
        document.body.innerHTML = '';
    });

    test('createElement should create element with correct properties', () => {
        const element = createElement('div', 'test-class', 'Test content');
        
        expect(element.tagName).toBe('DIV');
        expect(element.className).toBe('test-class');
        expect(element.textContent).toBe('Test content');
    });

    test('createElement should work without className and content', () => {
        const element = createElement('span');
        
        expect(element.tagName).toBe('SPAN');
        expect(element.className).toBe('');
        expect(element.textContent).toBe('');
    });

    test('toggleVisibility should toggle element display', () => {
        // Set up DOM
        document.body.innerHTML = '<div id="test-element" style="display: block;"></div>';
        
        const element = document.getElementById('test-element');
        expect(element.style.display).toBe('block');
        
        toggleVisibility('test-element');
        expect(element.style.display).toBe('none');
        
        toggleVisibility('test-element');
        expect(element.style.display).toBe('block');
    });

    test('toggleVisibility should handle non-existent elements gracefully', () => {
        // Should not throw error
        expect(() => toggleVisibility('non-existent')).not.toThrow();
    });
});

describe('DOM Integration Tests', () => {
    beforeEach(() => {
        // Set up a basic DOM structure for testing
        document.body.innerHTML = `
            <div id="main-title">Welcome to Test Webpage</div>
            <button id="test-button">Click Me!</button>
            <div id="result" style="display: none;"></div>
            <form id="contact-form">
                <input type="text" id="name" name="name">
                <input type="email" id="email" name="email">
                <textarea id="message" name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        `;
    });

    test('should have required DOM elements', () => {
        expect(document.getElementById('main-title')).not.toBeNull();
        expect(document.getElementById('test-button')).not.toBeNull();
        expect(document.getElementById('result')).not.toBeNull();
        expect(document.getElementById('contact-form')).not.toBeNull();
    });

    test('main title should have correct text', () => {
        const title = document.getElementById('main-title');
        expect(title.textContent).toBe('Welcome to Test Webpage');
    });

    test('result div should be initially hidden', () => {
        const result = document.getElementById('result');
        expect(result.style.display).toBe('none');
    });

    test('form should have all required fields', () => {
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        expect(nameField).not.toBeNull();
        expect(emailField).not.toBeNull();
        expect(messageField).not.toBeNull();
        expect(emailField.type).toBe('email');
    });
});