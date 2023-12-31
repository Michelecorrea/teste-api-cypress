/// <reference types="cypress"/>

describe('Login - Testes da API ServRest',() => {

    it('Deve fazer login com sucesso', () => {
    cy.request ({
         method: 'POST',
         URL: 'http://localhost:3000/#/Login/post_login',
         body:{
            "email": "fulano@qa.com",
            "password": "teste"
          }       
    }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Login realizado com sucesso")
            cy.log(response.body.authorization)
           })
          });

     });