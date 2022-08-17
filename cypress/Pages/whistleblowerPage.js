
const home = cy.visit("https://fatalmodel.com/") 

class WhistleblowerPageResources{

//Entrar na página home
visitHome(){
    cy.visit(home)
}

//Entrar na página de denuncias
visitWistleblower(){
   // descobrir uma maneira de pegar a outra ABA criada 
  

    
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
    
}