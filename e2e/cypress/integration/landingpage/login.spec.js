context('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3005/login');
  });
  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('check login', () => {
    cy.wait(3000);
    cy.get('[name="username"]').type('username').should('have.value', 'username');
    cy.get('[name="password"]').type('username').should('have.value', 'password');
    cy.get('button[type="submit"]').click();
    cy.wait(10000);
    cy.url().should('eq', 'http://localhost:3005/');
  });
});
