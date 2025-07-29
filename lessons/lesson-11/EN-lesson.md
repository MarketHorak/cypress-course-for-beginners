## **Lesson 11: Page Object Model (POM) Pattern in Cypress**

### **Objectives**

- Implement the Page Object Model (POM) pattern to enhance test maintainability.
- Encapsulate page elements and actions into reusable modules.
- Reuse page objects across multiple tests to minimize duplication and improve scalability.

---

### **Content Breakdown**

#### **A. Understanding POM Design patterns**

##### What is a Design Pattern and Why Is It Important?

**Definition:**

A **design pattern** is a general, reusable solution to a common problem that occurs in software design. It is not a finished design that can be transformed directly into code but rather a template or blueprint that can be applied in many different situations to solve a design challenge.

**Why Design Patterns Are Important:**

1. **Reusable Solutions:**  
   - They provide tried-and-true methods for solving common design problems, reducing the need to reinvent the wheel.

2. **Improved Communication:**  
   - Design patterns offer a shared vocabulary among developers. When someone mentions a “Factory Pattern” or “Observer Pattern,” the team immediately understands the general approach being discussed.

3. **Enhanced Maintainability:**  
   - Applying well-known patterns makes code easier to understand, maintain, and extend over time because the structure is clear and follows established best practices.

4. **Better Scalability:**  
   - Patterns help in organizing code in a way that is scalable and can handle future changes or additional features more gracefully.

5. **Separation of Concerns:**  
   - They encourage separating responsibilities in code, which reduces coupling and increases the clarity of each component’s role.

6. **Faster Development:**  
   - Using established patterns can speed up development by providing a blueprint for solving problems, allowing developers to focus on specific implementation details rather than on the overall structure.


#### Page Object Model
1. **What is the Page Object Model?**
   - **Definition:**  
     The Page Object Model (POM) is a design pattern in test automation that separates the representation of a page (the page elements and actions) from the test logic. Each page of the application is represented by a class or module containing locators (selectors) and methods (actions) that interact with the page.
   - **Purpose:**  
     - Abstract UI details away from the test code.
     - Make tests more maintainable and easier to read.

2. **Benefits of Using POM in Test Automation:**
   - **Maintainability:**  
     When the UI changes, you only need to update the page object instead of all the tests.
   - **Reusability:**  
     Common actions (e.g., logging in, filling forms) are encapsulated in one place and can be reused across multiple tests.
   - **Readability:**  
     Tests become cleaner and more focused on test logic, as low-level interactions are abstracted into page objects.
   - **Scalability:**  
     Enables building a modular test suite that grows alongside the application.

---

#### **B. Implementing POM**

1. **Creating Page Classes/Modules:**
   - Each page is represented by its own JavaScript file (or class) that contains selectors and methods for that page.
   - **Example Directory Structure:**
     ```
     cypress/
     ├── e2e/
     │   ├── login.spec.js
     │   └── registration.spec.js
     └── pages/
             ├── LoginPage.js
             └── RegistrationPage.js
     ```

2. **Encapsulating Page Elements and Actions:**
   - **Example: LoginPage.js**
     ```javascript
     // cypress/support/pages/LoginPage.js
     class LoginPage {
       // Define element selectors
      
       usernameInput () => cy.get('[data-cy="login-username-input"]'),
       passwordInput () => cy.get('[data-cy="login-password-input"]'),
       submitButton () => cy.get('[data-cy="login-submit-button"]'),
       errorMessage () => cy.get('[data-cy="error-invalid"]'),
       successMessage () => cy.get('[data-cy="login-success-message"]')
      
       // Define actions
       login(username, password) {
         this.usernameInput().clear().type(username);
         this.passwordInput().clear().type(password);
         this.submitButton().click();
       }
     }

     export const loginPage = new LoginPage();
     ```

   - **Example: RegistrationPage.js**
     ```javascript
     // cypress/support/pages/RegistrationPage.js
     class RegistrationPage {
       usernameInput () => cy.get('[data-cy="reg-username-input"]'),
       emailInput () => cy.get('[data-cy="reg-email-input"]'),
       passwordInput () => cy.get('[data-cy="reg-password-input"]'),
       submitButton () => cy.get('[data-cy="reg-submit-button"]'),
       successMessage () => cy.get('[data-cy="reg-success-message"]'),
       errorMessage () => cy.get('[data-cy="reg-error-message"]')

       register(user) {
         this.elements.usernameInput().clear().type(user.username);
         this.elements.emailInput().clear().type(user.email);
         this.elements.passwordInput().clear().type(user.password);
         this.elements.submitButton().click();
       }
     }

     export const registrationPage = new RegistrationPage();
     ```

3. **Reusing Page Objects Across Multiple Tests:**
   - Once defined, you can import these page objects into your test files to perform actions without duplicating selector logic.
   - **Example in a test file:**
     ```javascript
     /// <reference types="cypress" />
     import { loginPage } from '../../support/pages/LoginPage';

     describe('User Login @login', () => {
       beforeEach(() => {
         cy.visit('login.html');
       });

       it('should log in successfully with valid credentials', () => {
         loginPage.login('demoUser', 'demoPass');
         loginPage.elements.successMessage().should('be.visible');
       });

       it('should display an error with invalid credentials', () => {
         loginPage.login('wrongUser', 'wrongPass');
         loginPage.elements.errorMessage().should('be.visible');
       });
     });
     ```

#### Implementing POM with a Parametrized Constructor

In some applications, you might have multiple similar widgets on a page (e.g., product cards, dashboard widgets) that share the same functionality but are differentiated by an id or another attribute. You can use a parametrized constructor in your Page Object Model to handle these cases.

**Example: A Widget Page Object**

Suppose you have several widgets on a dashboard, each displaying information about different products. Each widget has a unique id, and you want to interact with a specific widget.

**HTML Example (for a widget):**
```html
<div class="widget" data-testid="widget1">
  <h2 data-cy="widget-title">Widget Title</h2>
  <p data-cy="widget-description">This is a description.</p>
  <button data-cy="widget-action">Action</button>
</div>
```

**Parametrized Page Object:**
```javascript
// cypress/support/pages/WidgetPage.js

class WidgetPage {
  constructor(widgetId) {
    // The widget container is selected based on the provided widgetId
    this.widgetSelector = `[data-test="${widgetId}"]`;
  }

  // Returns the widget container element
  getContainer() {
    return cy.get(this.widgetSelector);
  }

  // Returns the title element within the widget
  getTitle() {
    return this.getContainer().find('[data-cy="widget-title"]');
  }

  // Returns the description element within the widget
  getDescription() {
    return this.getContainer().find('[data-cy="widget-description"]');
  }

  // Returns the action button within the widget
  getActionButton() {
    return this.getContainer().find('[data-cy="widget-action"]');
  }

  // Action: Click the widget's action button
  clickActionButton() {
    this.getActionButton().click();
  }
}

// Export a factory function to create a new widget instance based on widgetId
export const getWidget = (widgetId) => new WidgetPage(widgetId);
```

**Usage in a Test:**
```javascript
/// <reference types="cypress" />
import { getWidget } from '../../support/pages/WidgetPage';

describe('Dashboard Widgets', () => {
  beforeEach(() => {
    cy.visit('dashboard.html');
  });

  describe('Widget Interactions', () => {
    it('should display correct title and description for widget1', () => {
      const widget = getWidget('widget1');
      widget.getTitle().should('contain', 'Widget Title');
      widget.getDescription().should('contain', 'This is a description.');
    });

    it('should perform an action when widget1 action button is clicked', () => {
      const widget = getWidget('widget1');
      widget.clickActionButton();
      // Add assertions related to the action here
    });
  });
});
```

##### Another example - Shopping cart
```javascript 

export default class CartItem {
  private index: number = 0
  constructor(index: number = 0) {
    // constructor logic here
    this.index = index
  }

  product = () => cy.get(`[data-testid="product-${this.index}"]`)

  productTitle = () => this.product().find('[data-testid="product-header"]')
  productType = () => this.product().find('[data-testid="product-type-attribute"]').eq(0)
  editProductBtn = () => this.product().find('[data-testid*="header-detail-button"]')
  detailProduct = () => this.product().find('[data-testid="button-detail-product"]')

  openProductDetail = () => {
    this.editProductBtn().click()
  }
}
```
**Usage in test**
```javascript
it('Should open product detail from the cart on Product page', () => {
    
    // ... code 

    let cartItem = new CartItem(0)
    cartItem.productTitle().should('contain', 'Pivo s rumom')
    cartItem.openProductDetail()

    // ... code
  })
  ```

---

#### **C. Best Practices for POM**

1. **Keep Page Objects Clean and Focused:**
   - Each page object should only contain locators and actions specific to that page.
   - Avoid mixing unrelated logic.

2. **Avoid Duplication:**
   - Reuse selectors and actions across tests by defining them in page objects.
   - If multiple pages share common elements or actions, consider creating a base page class.

3. **Ensure Scalability:**
   - Design page objects to be easily extendable as the application grows.
   - Use clear, descriptive method names that reflect user actions (e.g., `login()`, `register()`, `fillForm()`).

4. **Maintainability:**
   - When the UI changes, only update the corresponding page object.
   - Keep the test files clean and focused on assertions, while page objects handle interactions.

5. **Use Descriptive Naming Conventions:**
   - **describe() Blocks:** Use the feature or page name (e.g., "Login Page Tests").
   - **it() Blocks:** Use the AAA pattern (e.g., "should log in successfully when provided valid credentials").

---

#### **D. Using Cypress Custom Commands in Conjunction with POM**

- While page objects encapsulate page-specific interactions, custom commands can encapsulate frequently repeated actions across different pages.
- **Example:** If logging in is a common action used in multiple test suites, define a custom command that calls the `loginPage.login()` method.
  ```javascript
  // In cypress/support/commands.js
  import { loginPage } from './pages/LoginPage';
  Cypress.Commands.add('login', (username, password) => {
    loginPage.login(username, password);
  });
  // Usage in test:
  cy.login('demoUser', 'demoPass');
  ```

---

#### **E. Testing Structure for Cypress Projects**

- **Directory Organization:**  
  - **Fixtures:** Store external data (e.g., JSON files).
  - **Integration/E2E:** Place test spec files organized by feature.
  - **Plugins:** Configure or extend Cypress behavior.
  - **Support:** Include custom commands and page object files.
- **Consistency:**  
  - Maintain a consistent naming convention and file structure across the project.
- **Scalability:**  
  - Organize tests into logical groups using nested `describe()` blocks.
  - Use custom commands and page objects to reduce duplication and ease maintenance.

---

### **Activities**

- **Create test for Example application:**  
  - Explore application and suggest tests
---

### **Resources**

- **Cypress Documentation on POM:**  
  [Page Object Model in Cypress](https://docs.cypress.io/guides/references/best-practices#Page-Object-Model)
- **Sample Projects:**  
  Explore open-source projects on GitHub that implement the POM pattern with Cypress.
