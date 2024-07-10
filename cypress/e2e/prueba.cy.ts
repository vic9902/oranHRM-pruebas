describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logi');
    cy.location("pathname").should('eq', '/web/index.php/auth/login');
  })
})