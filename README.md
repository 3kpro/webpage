# Test Webpage

A comprehensive test webpage project demonstrating modern web development testing practices.

![Webpage Screenshot](https://github.com/user-attachments/assets/b7b97133-f2d3-4cd6-9bf5-2fbcbb5dffb1)

## Features

- **Responsive Design**: Mobile-first responsive layout with CSS Grid and Flexbox
- **Interactive Elements**: Click-to-test button functionality with user feedback
- **Form Validation**: Client-side form validation with comprehensive error handling
- **Smooth Navigation**: Smooth scrolling navigation between sections
- **Accessibility**: Proper semantic HTML, ARIA labels, and keyboard navigation support

## Testing Infrastructure

This project includes comprehensive testing setup with:

### Unit Tests
- **Jest**: JavaScript testing framework with JSDOM environment
- **30 test cases** covering all core functionality
- **Coverage reporting** with detailed metrics
- Tests for form validation, DOM manipulation, and utility functions

### Code Quality
- **ESLint**: JavaScript linting with strict rules
- **HTML Validate**: HTML markup validation
- **Trailing whitespace** and code formatting checks

### Continuous Integration
- **GitHub Actions**: Automated testing on multiple Node.js versions (16.x, 18.x, 20.x)
- **Lighthouse CI**: Performance, accessibility, and SEO testing
- **Codecov**: Test coverage reporting

## Getting Started

### Prerequisites
- Node.js (16.x, 18.x, or 20.x)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Application
```bash
# Start local development server
npm run serve
# Visit http://localhost:8000/src/index.html
```

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run linting
npm run lint

# Validate HTML
npm run validate-html
```

## Project Structure

```
├── src/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # CSS styles
│   └── script.js           # JavaScript functionality
├── tests/
│   ├── script.test.js      # JavaScript unit tests
│   └── html.test.js        # HTML structure tests
├── .github/workflows/
│   └── test.yml            # CI/CD pipeline
├── package.json            # Dependencies and scripts
├── .eslintrc.js           # ESLint configuration
├── .htmlvalidate.json     # HTML validation rules
└── lighthouserc.js        # Lighthouse CI configuration
```

## Test Coverage

Current test coverage includes:
- Form validation logic
- Email validation
- Mathematical utilities
- DOM manipulation functions
- HTML structure and accessibility
- Interactive element behavior

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all tests pass: `npm test`
5. Run linting: `npm run lint`
6. Submit a pull request

## License

MIT License - see LICENSE file for details.
