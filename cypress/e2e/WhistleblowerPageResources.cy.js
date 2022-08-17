/// <reference types="cypress" />
//import  WhistleblowerPageResources from '../Pages/whistleblowerPage'

describe("Whistleblower Page Test", () => {
   
    it ("Choose a reason to report", () => {
       cy.visit('https://fatalmodel.com/', {
        onBeforeLoad: win => {
          win.sessionStorage.clear()
        }
      })
       cy.contains('Concordo').click()
       cy.visit('https://fatalmodel.com/1362118/laura-fernandes-1362118')
       cy.contains('a', 'Denunciar perfil ').invoke('removeAttr','target').click()
      
       cy.contains('button', 'Continuar').click()
       cy.get('.denounce__form > [data-v-4c838268=""]').click().type('a@a.com')
       cy.contains('button', 'Continuar').click()

    

      

    })

    it ('Check title is visible', () => {
        cy.get('.denounce__title > .inner-text').should ('be.visible')
        cy.contains('ESCOLHA UM MOTIVO PARA A DENÚNCIA')
    })

    it('Check subtitle is visible', () => {
        cy.get('.denounce__subtitle > .inner-text').should('be.visible')
        cy.contains('Selecione abaixo o motivo pelo qual você está denunciando este perfil.').should('be.visible')
        
    })

    
    it ('Check button Irregularidade no perfil is visible', () => {
        cy.get('.denounce__types > :nth-child(1)').should ('be.visible')
    })

    it ('Check button Extorsão e golpe do pix is visible', () => {
        cy.get('.denounce__types > :nth-child(2)').should ('be.visible')
    })

    it ('Check button Gênero incorreto is visible', () => {
        cy.get('.denounce__types > :nth-child(3)').should ('be.visible')
    })
    
    it ('Check content is visible', () => {
        cy.get('.denounce__content > :nth-child(1)').should ('be.visible')
    })




    //it('Agree modal +18 terms and Cookies', () => {
     // WhistleblowerPageResources.visitHomeAndClearSessionStorage();
    // WhistleblowerPageResourcesa.agreeModalTerms();

   // })

   // it('Check title is visible', () =>{
      //  WhistleblowerPageResources.visitProfile();
      //  WhistleblowerPageResources.leaveSameTabe();
      //  WhistleblowerPageResources.clickContinue();
       // WhistleblowerPageResources.adEmail();
      //  WhistleblowerPageResources.clickContinue();



    //})
   
})



