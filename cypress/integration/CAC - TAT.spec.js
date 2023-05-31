//<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
    cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
  })
    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName', { timeout: 10000}).type('Marcella')
        cy.get('#lastName').type('Alzuguir')
        cy.get('#email').type('marcellaalzuguirma@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
    })
