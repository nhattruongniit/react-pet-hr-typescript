context('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3005/');
  });
  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('check UI information', () => {
    cy.get('[name="username"]').should('have.value', '');
    cy.get('button[type="submit"]').should('have.text', 'Submit');
  });
});
