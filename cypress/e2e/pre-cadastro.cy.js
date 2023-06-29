///<reference types="Cypress"/>





describe('Funcionalidade botão criar conta profissional', () => {
  beforeEach(() => {
    cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
    cy.clearCookies() 
  });
  

  it('Cenário 1:Criar conta', () => {
  
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
    cy.xpath('/html/body/div[1]/div[1]/div/section/div[1]/form/div[2]/a/button[1]').click()
    

    
    cy.get('.sc-2bp86y-2 > p').should('contain', 'Antes de continuar, verifique se as informações estão corretas.')
    cy.get(':nth-child(1) > .sc-16me5u5-1').should('contain', 'Nome Civil ou Social completo')
    cy.get('p').should('contain', 'E-mail')
   
 
  
    
   
    });
  });