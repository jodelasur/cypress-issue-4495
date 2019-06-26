describe('Index', () => {
  it('goes to new.html after {enter} + trigger input', () => {
    cy.visit('app/index.html');
    cy.get('#id_text').type('typing{enter}').trigger('input');
    cy.contains('new.html here');
  });
  
  it('goes to new.html after {enter}', () => {
    cy.visit('app/index.html');
    cy.get('#id_text').type('typing{enter}');
    cy.contains('new.html here');
  });
  
  it('goes to new.html after separate {enter}', () => {
    cy.visit('app/index.html');
    cy.get('#id_text').type('typing').type('{enter}');
    cy.contains('new.html here');
  });
  
  it('goes to new.html after separate {enter} + trigger input', () => {
    cy.visit('app/index.html');
    cy.get('#id_text').type('typing').type('{enter}').trigger('input');
    cy.contains('new.html here');
  });
});
