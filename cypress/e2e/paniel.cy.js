///<reference types="Cypress"/>





describe('Funcionalidade painel', () => {
    beforeEach(() => {
      cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
      cy.clearCookies() 
    });
    it('Cenário 1:Criar conta', () => {}