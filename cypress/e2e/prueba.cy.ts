describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.location("pathname").should('eq', '/web/index.php/auth/login');
  })
})