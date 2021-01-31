
describe('Grupo de Pruebas Front End Web RecargaPay', function(){
    beforeEach(()=>{
        cy.fixture('dataClient.json').as('userData')
        })

    it('Prueba Recarga celular',function(){
    cy.get('@userData').then((userData)=>{

    cy.visit('https://recargapay.com.br/');
    cy.contains( 'Recarga de celular' ).click();
    cy.get('#allNumberInput').type(userData.prefijoNumber + userData.restNumber);
    cy.get('#showModalButton').click()
    cy.get('#showNumber').should('contain.text','('+userData.prefijoNumber+') '+userData.restNumber)
    })
    })
})