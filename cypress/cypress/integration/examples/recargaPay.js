
describe('Grupo de Pruebas Front End Web RecargaPay', function(){
    it('Prueba Recarga celular',function(){
    cy.visit('https://recargapay.com.br/');
    cy.contains( 'Recarga de celular' ).click();
    cy.get('#allNumberInput').type("1234586456");
    cy.get('#showModalButton').click()
    cy.get('#showNumber').should('contain.text', '(12) 34586456')
    })
    })