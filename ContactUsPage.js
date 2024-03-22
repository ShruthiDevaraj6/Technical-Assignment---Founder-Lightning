const data = require ('C:/Users/dshru/Cypress Automation/cypress/fixtures/contactPage.json')
let userdata=data;
class ContactPage{
    contactLabel = ".display-4"
    confirmBtn = "#hs-eu-confirmation-button"
    cookie = ".cc-allow"
    txtfirstname= "#firstname-b15d4232-7672-429d-81fd-a00020bddf95"
    errormessage_fn ="div[class='hs_firstname hs-firstname hs-fieldtype-text field hs-form-field'] label[class='hs-error-msg hs-main-font-element']"
    txtlastname = "#lastname-b15d4232-7672-429d-81fd-a00020bddf95"
    errormessage_ln ="div[class='hs_lastname hs-lastname hs-fieldtype-text field hs-form-field'] label[class='hs-error-msg hs-main-font-element']"
    txtemail = "#email-b15d4232-7672-429d-81fd-a00020bddf95"
    emailformaterror = ".hs-error-msg"
    errormessage_email = "div[class='hs_email hs-email hs-fieldtype-text field hs-form-field'] label[class='hs-error-msg hs-main-font-element']"
    txtmobnumber ="#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95"
    mobilerrorformat = "div[class='hs_mobilephone hs-mobilephone hs-fieldtype-phonenumber field hs-form-field'] label[class='hs-error-msg hs-main-font-element']"
    errormessage_mob = "div[class='hs_mobilephone hs-mobilephone hs-fieldtype-phonenumber field hs-form-field'] label[class='hs-error-msg hs-main-font-element']"
    dropdown = "#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95"
    txtmessage = "#message-b15d4232-7672-429d-81fd-a00020bddf95"
    error_text = "div[class='hs_message hs-message hs-fieldtype-textarea field hs-form-field'] label[class='hs-error-msg hs-main-font-element']"
    clickbtn =".actions > .btn"
    messageConf = "div[class='container pb-5 mb-5 position-relative'] p:nth-child(1)"

    verifyContactPageIsLoaded(){
        cy.get(this.confirmBtn).click()
        cy.get(this.cookie).click()
        cy.get(this.contactLabel).should('contain.text','Contact')
    }

    setFirstName(firstname)
    {
        cy.get(this.txtfirstname).type(firstname)
        // Negative Assertion- Check that the error message for the mandatory field is not displayed- Please complete the required field
        //cy.get(this.errormessage_fn).should('be.visible').and('not.contain','Please complete the required field')
    }
    

    setLastName(lastname)
    {
        cy.get(this.txtlastname).type(lastname)
        // Negative Assertion- Check that the error message for the mandatory field is not displayed- Please complete the required field
       // cy.get(this.errormessage_ln).should('be.visible').and('contain','Please complete the required field')
        
    }

    setEmail(email)
    {
        cy.get(this.txtemail).type(email)
        //Negative Assertion - Check for the error message - Email must be formatted correctly is not displayed
        //cy.get(this.emailformaterror).should('be.visible').and('contain','Email must be formatted correctly')
        // Negative Assertion- Check that the error message for the mandatory field is not displayed- Please complete the required field
        //cy.get(this.errormessage_email).should('be.visible').and('contain','Please complete the required field')
    }

    setMobileNumber(number)
    {
        cy.get(this.txtmobnumber).type(number)
        //Negative assertion -Check for the error message- A valid phone number may only contain numbers, +()-. or x is not displayed
        //cy.get(this.mobilerrorformat).should('be.visible').and('contain','A valid phone number may only contain numbers, +()-. or x')
        // Negative Assertion- Check that the error message for the mandatory field is not displayed- Please complete the required field
        //cy.get(this.errormessage_mob).should('be.visible').and('contain','Please complete the required field')
    }

    verifyDropdown(){
        cy.get(this.dropdown).select("LinkedIn").should('have.value','LinkedIn')
    }

    setMessage(message){
        cy.get(this.txtmessage).type(userdata.message)
        // Negative Assertion- Check that the error message for the mandatory field is not displayed- Please complete the required field
        //cy.get(this.error_text).should('be.visible').and('contain','Please complete the required field')
    }

    

    ClickMessageBtn(){
        cy.get(this.clickbtn).click()
        cy.wait(1000)  
              
    }

    
   /* verifyMessageConfirmation(){
        cy.get(this.messageConf).should('have.text',userdata.messageconfirm)
    }*/
    

}

export default ContactPage;