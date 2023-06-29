///<reference types="Cypress"/>



    describe('Funcionalidade botão cadastrar profissional', () => {
        beforeEach(() => {
          cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
          cy.clearCookies() 
        });
        
      
        it('Cenário 1: Acessar página de cadastro', () => {
        cy.get(':nth-child(1) > .sc-16me5u5-2').click()
        cy.get(':nth-child(1) > .sc-16me5u5-2').type("kamiladsg36@gmail.com")
        cy.get(':nth-child(2) > .sc-16me5u5-2').click()
        cy.get(':nth-child(2) > .sc-16me5u5-2').type("Kamila36#")
        cy.get('[type="submit"]').click()

        cy.get('h1').should('contain', 'Boas-vindas à Lacrei Saúde') 
        cy.get('.forgot-password').should('contain', 'Esqueci minha senha')  
        cy.get('p').should('contain', 'Entre ou crie sua conta Lacrei Saúde.')  
        
          
         
          });
        });