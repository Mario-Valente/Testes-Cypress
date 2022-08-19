/// <reference types="cypress" />
import whistleblowerPage from '../Pages/whistleblowerPage';
import  WhistleblowerPageResources from '../Pages/whistleblowerPage'

describe("Whistleblower Page Test", () => {
    WhistleblowerPageResources.setDesktopViewport();
  
 it('Agree modal +18 terms and Cookies', () => {
     WhistleblowerPageResources.visitHomeAndClearSessionStorage();
     WhistleblowerPageResources.agreeModalTerms();

    })
    it('Check title is visible', () =>{
         WhistleblowerPageResources.visitAdProfile();
         WhistleblowerPageResources.agreeModalTerms();
         WhistleblowerPageResources.leaveSameTabe();
         WhistleblowerPageResources.clickContinue();
         WhistleblowerPageResources.adEmail();
         WhistleblowerPageResources.clickContinue();
  
    })
    it ('Check title is visible', () => {
        WhistleblowerPageResources.CheckTitleIsVisible();
    })

    it('Check subtitle is visible', () => {
        WhistleblowerPageResources.checkSubTitleIsVisible();
         
     })
    
     it ('Check button Irregularidade no perfil is visible', () => {
        WhistleblowerPageResources.checkButtonIrregularidadeIsVisible();
    })
    
    it ('Check button Extorsão e golpe do pix is visible', () => {
        WhistleblowerPageResources.checkButtonGolpepixIsVisible();
     })
    
     it ('Check button Gênero incorreto is visible', () => {
        WhistleblowerPageResources.checkButtonGeneroIsVisible()
      
       
     })
     it ('Check content is visible', () => {
        WhistleblowerPageResources.checkContentIsVisible();
    })
})



