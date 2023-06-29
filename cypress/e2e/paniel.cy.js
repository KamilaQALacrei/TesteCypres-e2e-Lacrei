///<reference types="Cypress"/>



    describe('Funcionalidade botão cadastrar profissional', () => {
        beforeEach(() => {
          cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
          cy.clearCookies() 
        });
        
      
        it('Cenário 1: Acessar página de cadastro', () => {
        cy.get(':nth-child(1) > .sc-16me5u5-2').click()
        cy.get(':nth-child(1) > .sc-16me5u5-2').type("kamiladsg36@gmail.com")
        
          
    
        
          
         
          });
        });