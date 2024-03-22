
import ContactPage from "../PageObjects/ContactUsPage.js"
describe('POM', () =>   
{
    const cp = new ContactPage();
    let userdata;
    before(()=>{  
    
        cy.fixture('contactPage.json').then((data)=>{
        userdata=data
            })
        })       
    it('Verify Contact Us Page', () => {
      
      cy.visit("https://www.founderandlightning.com/contact")

      cy.fixture('contactPage.json').then((data =>{
        cp.verifyContactPageIsLoaded();
        cp.setFirstName(userdata.firstname)
        cp.setLastName(userdata.lastname)
        cp.setEmail(userdata.email)
        cp.setMobileNumber(userdata.number)
        cp.verifyDropdown()
        cp.setMessage(userdata.message)
        cp.ClickMessageBtn()
        //cp.verifyMessageConfirmation()


      }))
      
      
    })
})