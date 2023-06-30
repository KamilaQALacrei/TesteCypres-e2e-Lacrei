///<reference types="Cypress"/>



    describe('Funcionalidade botão cadastrar profissional', () => {
        beforeEach(() => {
          cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
          cy.clearCookies() 
        });
        
      
        it('Cenário 1: Acessar página de cadastro', () => {
            cy.get(':nth-child(1) > .sc-16me5u5-2').click()
            cy.get(':nth-child(1) > .sc-16me5u5-2').type("chriscsantos.qa@gmail.com")
            cy.get(':nth-child(2) > .sc-16me5u5-2').click()
            cy.get(':nth-child(2) > .sc-16me5u5-2').type("Qa123#45")
            cy.get('[type="submit"]').click()
            cy.get(':nth-child(2) > .sc-16wss1z-3').click()
            cy.get('[href="/saude/painel-inicial"] > .sc-18p54ra-1').click()
            cy.get(':nth-child(1) > .sc-16wss1z-3').click()
            cy.get('.sc-18p54ra-0 > .sc-18p54ra-1').click()


            cy.get('h1').should('contain', 'Boas-vindas à Lacrei Saúde') 
            cy.get('p').should('contain', 'Entre ou crie sua conta Lacrei Saúde.')
            cy.get(':nth-child(1) > .sc-16me5u5-1').should('contain', 'E-mail')
            cy.get(':nth-child(2) > .sc-16me5u5-1').should('contain', 'Senha')  
            cy.get('[type="submit"]').should('contain', 'Entrar') 
            cy.get('.sc-18p54ra-0 > .sc-18p54ra-1').should('contain', 'Criar conta') 
            cy.get('.forgot-password').should('contain', 'Esqueci minha senha')  
        
        });

        it('Cenário 2: Acessar página de diversidade', () => {
          cy.get(':nth-child(2) > .sc-16wss1z-3').click()
        });



        });