describe('dc-ui button', () => {
  // '/iframe.html?id=buttoncomponent--primary&knob-text=Click me!&knob-padding&knob-style=default'
  const styles = ['default', 'primary', 'warning', 'danger'];
  const baseUrl = '/iframe.html?id=common-button--primary&viewMode=story';

  it('should render the component', () => {
    cy.visit(baseUrl);
    cy.get('.button').should('exist');
    cy.get('.button').contains('Click me!');
  });

  it.only('should have the label "Validate Form"', () => {
    cy.visit(`${baseUrl}&knob-text=Validate Form&knob-style=primary`);
    // cy.get('.button').should('have.class', '.primary');
    cy.get('.primary').contains('Validate Form');
  });

  it('should render the component per style', () => {
    styles.forEach((style) => {
      cy.visit(`${baseUrl}&knob-style=${style}`);
      cy.get(`.${style}`).should('exist');
    });
  });

  it('should not exist after click', () => {
    cy.visit(baseUrl);
    cy.get('.button').click();
    cy.get('.button').should('not.exist');
  });
});
