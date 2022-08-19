
const home = "https://fatalmodel.com/"

const viewportWidth = 1440
const viewportHeight = 720

class WhistleblowerPageResources{
//Define a Viewport Desktop
setDesktopViewport() {
Cypress.config('viewportWidth', viewportWidth)
Cypress.config('viewportHeight', viewportHeight)
  }

//Entrar na página home
visitHome(){
    cy.visit(home)
}



//Acessa a página Home e limpa o Session Storage / Faz aparecer sempre a modal +18 terms e Cookies
visitHomeAndClearSessionStorage() {
    cy.visit(home, {
      onBeforeLoad: win => {
        win.sessionStorage.clear()
      }
    })
  }
  //Identifica e clica no botão da modal +18 terms e Cookies
agreeModalTerms() {
  cy.contains('Concordo').click()
  }

//Aperta o botão continuar da página de denuncias
clickContinue(){
  cy.contains('Continuar').click()
}

//Coloca email para ir para página de denuncias(usuario deslogado)
adEmail(){
  cy.get('.denounce__form > [data-v-4c838268=""]').click().type('a@a.com')
}

//Força a ficar na mesma aba após clicar em denunciar perfil
leaveSameTabe(){
  cy.contains('a', 'Denunciar perfil ').invoke('removeAttr','target').click()
}

//Visita um perfil de AD em winterfell
visitAdProfile(){
  cy.visit('https://fatalmodel.com/1362118/laura-fernandes-1362118')
}

//checa se o titulo é visivel 
CheckTitleIsVisible(){
  cy.get('.denounce__title > .inner-text').should ('be.visible')
  cy.contains('ESCOLHA UM MOTIVO PARA A DENÚNCIA').should('be.visible')
}

//checa se o subtitulo é visivel
checkSubTitleIsVisible(){
  cy.get('.denounce__subtitle > .inner-text').should('be.visible')
  cy.contains('Selecione abaixo o motivo pelo qual você está denunciando este perfil.').should('be.visible')
}

//Check button Irregularidade no perfil is visible
checkButtonIrregularidadeIsVisible(){
  cy.get('.denounce__types > :nth-child(1)').should ('be.visible')
    }



//Check button Extorsão e golpe do pix is visible
checkButtonGolpepixIsVisible(){
cy.get('.denounce__types > :nth-child(2)').should ('be.visible')
}



//Check button Gênero incorreto is visible
checkButtonGeneroIsVisible(){
cy.get('.denounce__types > :nth-child(3)').should ('be.visible')
}



//Check content is visible
checkContentIsVisible(){
cy.get('.denounce__content').should ('be.visible')
}
}
export default new WhistleblowerPageResources;