# Copilot Instructions for Cypress Course Repository

## Repository Overview

This repository contains a comprehensive Cypress testing course for beginners with 18 structured lessons. The course teaches end-to-end testing fundamentals, Cypress framework usage, and modern web testing practices through progressive, hands-on lessons.

## Project Structure & Architecture

### Course Organization
- **18 Lessons**: Progressive curriculum from Node.js basics to advanced Cypress topics
- **Multilingual Support**: Each lesson includes EN/RU/CZ/UA versions (English, Russian, Czech, Ukrainian)
- **Practical Exercises**: Most lessons contain hands-on exercise folders with real applications

### Directory Structure
```
lessons/
├── lesson-X/
│   ├── EN-lesson.md          # English lesson content
│   ├── RU-обучать.md         # Russian lesson content  
│   ├── CZ-lekce.md           # Czech lesson content
│   ├── UA-лекція.md          # Ukrainian lesson content
│   └── exercise/             # Practical exercises (when applicable)
│       ├── package.json      # Project dependencies
│       ├── cypress.config.js # Cypress configuration
│       └── src/              # Application source code
```

### Technology Stack
- **Primary Framework**: Cypress (end-to-end testing)
- **Runtime**: Node.js with npm package management
- **Frontend Frameworks**: Vue.js, Nuxt.js (in exercises)
- **Build Tools**: Vite configuration
- **Languages**: JavaScript, HTML, CSS
- **Testing Patterns**: Page Object Model, Custom Commands, API Testing

## Course Curriculum & Learning Path

### Beginner Level (Lessons 1-6)
1. **Lesson 1**: Course overview, Node.js introduction, automated vs manual testing
2. **Lesson 2**: Development environment setup
3. **Lesson 3**: Git fundamentals and version control
4. **Lesson 4**: JavaScript basics for testing
5. **Lesson 5**: HTML/CSS fundamentals
6. **Lesson 6**: Cypress installation and configuration

### Intermediate Level (Lessons 7-12)
7. **Lesson 7**: Basic Cypress commands and interactions
8. **Lesson 8**: Advanced element selection and assertions
9. **Lesson 9**: Test data management and fixtures
10. **Lesson 10**: Test structure and organization
11. **Lesson 11**: Page Object Model (POM) pattern
12. **Lesson 12**: Complex user interactions and workflows

### Advanced Level (Lessons 13-18)
13. **Lesson 13**: Database testing and integration
14. **Lesson 14**: Multi-domain testing and contexts
15. **Lesson 15**: Network requests and API testing
16. **Lesson 16**: Plugins and extensions
17. **Lesson 17**: Real-world problems and solutions
18. **Lesson 18**: CI/CD, reporting, and Cypress Dashboard

## Code Conventions & Standards
Do not use semicolons in JavaScript files, as per the project's coding style. Ensure all code is clean, well-commented, and follows best practices for readability and maintainability.

Do not put comments in the middle of code blocks. Use comments to explain complex logic or provide context for specific test cases.

### File Naming
- Lesson files: `{LANG}-{descriptor}.md` (e.g., `EN-lesson.md`)
- Test files: `*.spec.js` or `*.cy.js` in exercise folders
- Configuration: `cypress.config.js` (standard Cypress config)
- Package files: `package.json` with npm scripts

### Cypress Configuration Patterns
```javascript
// Standard configuration structure found in exercises
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true
  }
}
```

### Custom Commands Structure
- Located in `cypress/support/commands.js`
- Focus on reusable login, navigation, and form interactions
- Clear naming conventions with descriptive parameters

### Test Organization
- Use `describe()` blocks for feature grouping
- Nested contexts for sub-features
- `beforeEach()` for setup, `afterEach()` for cleanup
- Data-testid selectors preferred over CSS classes

## Development Workflow

### Exercise Development Pattern
1. **Application Setup**: Each exercise contains a working web application
2. **Cypress Integration**: Pre-configured Cypress with basic test structure
3. **Progressive Complexity**: Exercises build upon previous lesson concepts
4. **Multiple Frameworks**: Vue/Nuxt applications for realistic testing scenarios

### Package Management
- Use `npm install` for dependency installation
- Run tests with `npx cypress open` (GUI) or `npx cypress run` (headless)
- Standard npm scripts in package.json for common tasks

### Testing Approaches
- **E2E Testing**: Full user journey testing
- **API Testing**: Network request interception and mocking
- **Component Testing**: Vue component testing where applicable
- **Accessibility Testing**: Using cypress-axe plugin

## Integration Points & Dependencies

### Core Dependencies
- **Cypress**: Primary testing framework
- **Node.js**: Runtime environment (required for npm)
- **Vue/Nuxt**: Frontend framework for exercise applications
- **Vite**: Build tool for modern web applications

### Common Plugins
- `cypress-axe`: Accessibility testing
- `cypress-cucumber-preprocessor`: BDD testing approach
- `cypress-real-events`: Enhanced user interaction simulation
- `cypress-mochawesome-reporter`: Advanced reporting

### CI/CD Integration
- GitHub Actions workflows for automated testing
- Cypress Dashboard integration for test analytics
- Multi-environment testing support

## Best Practices for AI Agents

### When Analyzing Course Content
1. **Respect Learning Progression**: Understand that lessons build sequentially
2. **Language Consistency**: When modifying content, maintain consistency across all language versions
3. **Exercise Alignment**: Ensure exercise code matches lesson theoretical content
4. **Practical Focus**: Emphasize hands-on learning and real-world applications

### When Modifying Exercises
1. **Preserve Working State**: Ensure applications remain functional after changes
2. **Update Dependencies**: Keep package.json versions compatible and secure
3. **Maintain Test Coverage**: Preserve or enhance existing test scenarios
4. **Follow Cypress Best Practices**: Use recommended patterns and conventions

### When Adding New Content
1. **Progressive Difficulty**: Match complexity to lesson position in curriculum
2. **Multilingual Support**: Provide content in all supported languages
3. **Complete Examples**: Include working code with proper documentation
4. **Cross-Reference**: Link to related lessons and concepts appropriately

### Code Quality Guidelines
1. **Readable Test Code**: Use descriptive test names and clear assertions
2. **Maintainable Structure**: Organize tests in logical groups with proper setup/teardown
3. **Reliable Selectors**: Prefer data-testid attributes over brittle CSS selectors
4. **Error Handling**: Include appropriate wait conditions and error recovery

## Common Patterns & Examples

### Standard Test Structure
```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should perform specific action', () => {
    cy.get('[data-testid="element"]')
      .should('be.visible')
      .click();
    
    cy.url().should('include', '/expected-path');
  });
});
```

### Custom Command Example
```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-testid="username-input"]').type(username);
  cy.get('[data-testid="password-input"]').type(password);
  cy.get('[data-testid="login-button"]').click();
});
```

### API Testing Pattern
```javascript
cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
cy.visit('/users');
cy.wait('@getUsers');
```

This repository serves as a comprehensive educational resource for learning Cypress testing. When working with this codebase, prioritize educational value, maintain the progressive learning structure, and ensure all changes support the goal of teaching effective end-to-end testing practices.
