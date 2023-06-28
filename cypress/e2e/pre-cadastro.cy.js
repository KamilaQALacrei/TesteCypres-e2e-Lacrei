///<reference types="Cypress"/>

beforeEach(() => {
  cy.visit('https://lacrei-pessoa-profissional.vercel.app/')
});


describe('Funcionalidade Botão de criar conta profissional', () => {
  it('Cenário 1: Criar conta', () => {
    
    cy.get('#input\:c375ee802cc96ecf4fdc9c88d3c51216').type("kamila1dsg@gmail.com")
    cy.get('#input\:e168be6f4b2e75b4159beeed64a0b443').type("K123456")
    cy.get('.sc-18p54ra-0 > .sc-18p54ra-1').click()
  });
})