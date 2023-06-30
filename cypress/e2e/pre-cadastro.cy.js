///<reference types="Cypress"/>





describe('Funcionalidade botão criar conta profissional', () => {
  beforeEach(() => {
    cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
    cy.clearCookies() 
  });
  

  it('Cenário 1:Validar a criação de conta profissonal', () => {
  
    cy.get('.sc-18p54ra-0 > .sc-18p54ra-1').click()
    cy.get(':nth-child(2) > .sc-18p54ra-1').click()
    cy.contains("Selecione o Estado").click()
    cy.get("#option-SP").click()
    cy.get(':nth-child(2) > .sc-18p54ra-1').click()
    cy.get(':nth-child(1) > .sc-16me5u5-2').click()
    cy.get(':nth-child(1) > .sc-16me5u5-2').type("kamila")
    cy.get(':nth-child(2) > .sc-16me5u5-2').click()
    cy.get(':nth-child(2) > .sc-16me5u5-2').type("kamila1@gmail.com")
    cy.contains("Selecione sua Profissão").click()
    cy.get("#option-1").click()
    cy.get(':nth-child(4) > .sc-16me5u5-2').click()
    cy.get(':nth-child(4) > .sc-16me5u5-2').type("1234")
    cy.get(':nth-child(5) > .sc-16me5u5-2').click()
    cy.get(':nth-child(5) > .sc-16me5u5-2').type("12345Kab#")
    cy.get(':nth-child(6) > .sc-16me5u5-2').click()
    cy.get(':nth-child(6) > .sc-16me5u5-2').type("12345Kab#")
    cy.get("span[role='checkbox']").click()
    cy.get(':nth-child(1) > .sc-18p54ra-1').click()
   
    

    
    cy.get('h1').should('contain', 'Informe o Estado onde você atua')
    cy.get('.placeholder').should('contain', 'Selecione o Estado')
    cy.get('#label\:7b06c01432be128d5f871c46b70bf6c9').should('contain', 'Estado')
    cy.get(':nth-child(1) > .sc-16me5u5-1').should('contain', 'Nome Civil ou Social completo')
    cy.get(':nth-child(2) > .sc-16me5u5-1').should('contain', 'E-mail')
    cy.get('#label\:f419811a712070974c8f6847acea135a').should('contain', 'Profissão')
    cy.get(':nth-child(4) > .sc-16me5u5-1').should('contain', 'Número de Inscrição Profissional')
    cy.get(':nth-child(5) > .sc-16me5u5-1').should('contain', 'Senha')
    cy.get(':nth-child(6) > .sc-16me5u5-1').should('contain', 'Confirmar senha')
    cy.get('.sc-2bp86y-2 > p').should('contain', 'Antes de continuar, verifique se as informações estão corretas.')
  
    });
    
  });