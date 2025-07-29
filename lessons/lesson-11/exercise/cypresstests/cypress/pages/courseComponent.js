export default class CourseComponent {
  testid = ''

  constructor(testid) {
    this.testid = testid
  }

  nadradenyElement = () => cy.get(`div[data-testid="${this.testid}"]`)

  heading = () => this.nadradenyElement().find('h3')
  price = () => this.nadradenyElement().find('.price')

  commentForm = () => this.nadradenyElement().find('.comment-form')
  commentInput = () => this.commentForm().find('input')
  addCommentButton = () => this.commentForm().find('button')

  commentSection = () => this.nadradenyElement().find('.comments-section')

//   addComment(commentText) {
//     this.commentInput().clear().type(commentText)
//     this.addCommentButton().click()
//   }

addComment(commentText) {
  this.commentInput()
    .should('be.visible')
    .clear()
    .type(commentText)
    .then(() => {
      this.addCommentButton().click()
    })
}
}