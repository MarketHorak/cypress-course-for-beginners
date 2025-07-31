// import CourseComponent from '../pages/components/courseComponent'
import CourseComponent from '../pages/courseComponent'

describe('Courses tests', () => {
  it('Should validate heading on course', () => {
    cy.visit('http://localhost:3000/courses')

    const course2 = new CourseComponent('course-2')
    course2.heading().should('have.text', 'Advanced E2E Testing')
    course2.price().should('have.text', '149€')
    course2.commentForm().should('exist')
    course2.addComment('Advanced E2E Testing')
    cy.wait(200) //  buffer
    // course2.commentInput().should('have.value', 'Advanced E2E Testing')
 //// Hodnota inputu se hned odesílá -> není co ověřit ...moc nechapu jak to

    const course3 = new CourseComponent('course-3')
    course3.heading().should('have.text', 'Test Automation Patterns')
    course3.price().should('have.text', '129€')

    const course1 = new CourseComponent('course-1')
    course1.heading().should('have.text', 'Cypress Basics')
    course1.price().should('have.text', '99€')
  })
})
