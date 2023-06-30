///<reference types="Cypress"/>



    describe('Funcionalidade realizar login e acessar página de castro profissional/painel', () => {
        beforeEach(() => {
          cy.visit('https://lacrei-pessoa-profissional.vercel.app/');
          cy.clearCookies() 
        });
        
      
        it('Cenário 1: Validar login e acesso a página de cadastro profissional/Painel', () => {
            cy.get(':nth-child(1) > .sc-16me5u5-2').click()
            cy.get(':nth-child(1) > .sc-16me5u5-2').type("chriscsantos.qa@gmail.com")
            cy.get(':nth-child(2) > .sc-16me5u5-2').click()
            cy.get(':nth-child(2) > .sc-16me5u5-2').type("Qa123#45")
            cy.get('[type="submit"]').click()
            cy.get(':nth-child(2) > .sc-16wss1z-3').click()
            cy.get('[href="/saude/painel-inicial"] > .sc-18p54ra-1').click()
            cy.get(':nth-child(1) > .sc-16wss1z-3').click()
            cy.get('.sc-18p54ra-0 > .sc-18p54ra-1').click()
            cy.get(':nth-child(2) > .sc-16wss1z-3').click()
            cy.get('[href="/saude/painel-inicial"] > .sc-18p54ra-1').click()
            


            cy.get('h1').should('contain', 'Boas-vindas à Lacrei Saúde') 
            cy.get('p').should('contain', 'Entre ou crie sua conta Lacrei Saúde.')
            cy.get(':nth-child(1) > .sc-16me5u5-1').should('contain', 'E-mail')
            cy.get(':nth-child(2) > .sc-16me5u5-1').should('contain', 'Senha')  
            cy.get('[type="submit"]').should('contain', 'Entrar') 
            cy.get('.sc-18p54ra-0 > .sc-18p54ra-1').should('contain', 'Criar conta') 
            cy.get('.forgot-password').should('contain', 'Esqueci minha senha') 
            cy.get('.boxP > p').should('contain', 'Você faz a diferença para milhares de pessoas LGBTQIAPN+ que buscam inclusão, segurança e acolhimento nos serviços de saúde.') 
            cy.get(':nth-child(1) > .sc-16wss1z-1 > .sc-16wss1z-2').should('contain', 'Clique no botão “Cadastrar” para enviar seu cadastro') 
            cy.get(':nth-child(2) > .sc-16wss1z-1 > .sc-16wss1z-2').should('contain', 'Edite seu perfil com dados de diversidade') 
            cy.get(':nth-child(3) > .sc-16wss1z-1 > .sc-16wss1z-2').should('contain', 'Acesse a área de Segurança e Privacidade') 
          
        
        }); 


        });