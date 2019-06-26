describe('Index', () => {
  it('goes to new.html after pressing Enter', () => {
    cy.visit('app/index.html');
    cy.get('#id_text').type('typing{enter}').trigger('input');
    cy.contains('new.html here');
  });
});
