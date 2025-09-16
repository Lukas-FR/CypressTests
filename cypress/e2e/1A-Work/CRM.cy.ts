import { contains } from "cypress/types/jquery"

const tenant = "qa-cypress"

describe('login screen', () => {

    it('successfull login to Elixeum', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.get("#cookie-settings-button").click().wait(1000)
        cy.get('button').eq(0).click()
        cy.fixture('secret.json').then((user) => {
            cy.get("#input-field-email-email-null").type(user.correct_email)
            cy.get("#input-field-password-password-null").type(user.correct_pass)
        });
        cy.get("#login-button").click()
        cy.url().should("include", "https://portal-alpha.elixeum.cloud/"+(tenant)+"/dashboard").wait(1000)
    

        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Creating Person - Customer
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                      //add method everywhere
        cy.get("#party-contact-list-contact").click()
        cy.get("#field-select--null__select").click()                                   //add click at physical person
        cy.get("#field-text-firstName").type("firstNameCustomer")                               
        cy.get("#field-text-lastName").type("lastNameCustomer")                                 
        cy.get("#field-email-pin").type("emailCustomer@flying-rat.online")                      //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("emailCustomer1@flying-rat.online")                    //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        /*//go to tab - Notes
        cy.get('.tabs__list > div:nth-child(6)').click()                                //var tab crm; create class utility metod for markdown
        cy.get("#field-select--null").click()

        //Add heading 1 (biggest)
        cy.get('.milkdown-editor__toolbar > button:nth-child(1)').click()               
        cy.get('h1.milkdown-editor__heading-item').click()     
        cy.get('.milkdown-editor__main').type("Heading 1").type('{enter}')                       
        
        //Add heading 2
        cy.get('.milkdown-editor__toolbar > button:nth-child(1)').click()               
        cy.get('h2.milkdown-editor__heading-item').click()     
        cy.get('.milkdown-editor__main').type("Heading 2").type('{enter}')                           
        
        //Add heading 3
        cy.get('.milkdown-editor__toolbar > button:nth-child(1)').click()               
        cy.get('h3.milkdown-editor__heading-item').click()     
        cy.get('.milkdown-editor__main').type("Heading 3").type('{enter}')                           
        
        //Add heading 4
        cy.get('.milkdown-editor__toolbar > button:nth-child(1)').click()               
        cy.get('h4.milkdown-editor__heading-item').click()     
        cy.get('.milkdown-editor__main').type("Heading 4").type('{enter}')                           
        
        //Add heading 5
        cy.get('.milkdown-editor__toolbar > button:nth-child(1)').click()               
        cy.get('h5.milkdown-editor__heading-item').click()     
        cy.get('.milkdown-editor__main').type("Heading 5").type('{enter}')                           
        
        //Add heading 6 (smallest)
        cy.get('.milkdown-editor__toolbar > button:nth-child(1)').click()               
        cy.get('h6.milkdown-editor__heading-item').click()     
        cy.get('.milkdown-editor__main').type("Heading 6").type('{enter}')                           
                      
        //Add bold text
        cy.get('.milkdown-editor__toolbar > :nth-child(2)').click()
        cy.get('.milkdown-editor__main').type("Bold").type('{enter}')                   
        
        //Add Italic text
        cy.get('.milkdown-editor__toolbar > :nth-child(3)').click()
        cy.get('.milkdown-editor__main').type("Cursive").type('{enter}')                 

        //Add Strikethrough text
        cy.get('.milkdown-editor__toolbar > :nth-child(4)').click()
        cy.get('.milkdown-editor__main').type("Crossed").type('{enter}')                

        /*
        cy.get('.milkdown-editor__toolbar > :nth-child(5)').click()
        .type("Bullet list").wait(500)                            //Add bullet list text
        .type('{enter}').wait(500).type('{enter}')                                                //first Enter for next line second Enter for exiting from formating 

        cy.get('.milkdown-editor__toolbar > :nth-child(6)').click()
        .type("Order List")                             //Add order list text
        .type('{enter}').type('{enter}')                                                //first Enter for next line second Enter for exiting from formating 

        cy.get('.milkdown-editor__toolbar > :nth-child(7)').click()                     //Add checkbox                           

        cy.get('.milkdown-editor__toolbar > :nth-child(8)').click()                     //Add horizontal line 

        cy.get('.milkdown-editor__toolbar > :nth-child(9)').click()                     //works exactly like pressing Enter
        


        
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??
        */
        

        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)
        
        
        //go to tab - Invoice
        cy.get('.tabs__list > div:nth-child(13)').click()                 
        cy.get("#field-select--null").click().wait(3500)                                //Přidá Fakturu a počká 3,5 vteřiny pro načtení modulu Dokladů 
        cy.get('[id="tab-command-Contact.Title"]').click()                              //Vrátí se zpět do CRM
        
        
        //go to tab - Pallet
        cy.get('[id="tab-Pallet.List"]').click()                                        //Přejde do Sekce Palety                     
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-externalId-default").type("123")
        cy.get("#input-field-text-name-pallet").type("Name")
        cy.get("#input-field-text-abbreviation-pallet").type("ShorterName")
        cy.get("#input-field-text-count-pallet").type("10")
        cy.get("#generic-form-button").click().wait(1000)
        

        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Creating Organization - Customer
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                              //add method everywhere
        cy.get("#party-contact-list-contact").click()
        cy.get("#field-select--null__select").click()
        cy.get('[id="tab-ContactType.Organization.Title"]').click()                                  
        cy.get("#input-field-text-name-baseInfo").type("OrganizationName")                      //add org. Name                                                                
        cy.get("#input-field-text-cin-contactIdentification").type("123456789Customer")         //add CIN                      
        cy.get("#generic-form-button").click().wait(1000)                               


        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("email.organizationCustomer@flying-rat.online")       //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                                       //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes
      

        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)
        
        
        //go to tab - Invoice
        cy.get('.tabs__list > div:nth-child(13)').click()                 
        cy.get("#field-select--null").click().wait(3500)                                //Přidá Fakturu a počká 3,5 vteřiny pro načtení modulu Dokladů 
        cy.get('[id="tab-command-Contact.Title"]').click()                              //Vrátí se zpět do CRM
        
        
        //go to tab - Pallet
        cy.get('[id="tab-Pallet.List"]').click()                                        //Přejde do Sekce Palety                     
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-externalId-default").type("123")
        cy.get("#input-field-text-name-pallet").type("Name")
        cy.get("#input-field-text-abbreviation-pallet").type("ShorterName")
        cy.get("#input-field-text-count-pallet").type("10")
        cy.get("#generic-form-button").click().wait(1000)
        
        
        //go to tab - kontaktní osoby
        cy.get('.tabs__list > div:nth-child(18)').click()                                        //Přejde do Sekce kontaktní osoby                     
        cy.get("#field-select--null").click()
        cy.get('#field-text-firstName > .field-wrapper > .field-wrapper__main').type("ContactPersonName")                               
        cy.get('#field-text-lastName > .field-wrapper > .field-wrapper__main').type("ContactPersonSurname")                                 
        cy.get('#field-email-pin > .field-wrapper > .field-wrapper__main').type("emailContactPersonCustomer@flying-rat.online")                      //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Creating Person - Vendor
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                      //add method everywhere
        cy.get("#party-contact-list-vendor").click()
        cy.get("#field-select--null__select").click()                                   //add click at physical person
        cy.get('#input-field-text-firstName-baseInfo').type("firstNameVendor")                               
        cy.get('#input-field-text-lastName-baseInfo').type("lastNameVendor")                                 
        cy.get('#input-field-email-pin-contactIdentification').type("emailVendor@flying-rat.online")                //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)
            

        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("emailVendor1@flying-rat.online")                    //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes


        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)
        
        
        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Creating Organization - Vendor
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                                      //add method everywhere
        cy.get("#party-contact-list-vendor").click()
        cy.get("#field-select--null__select").click()
        cy.get('[id="tab-ContactType.Organization.Title"]').click()                                  
        cy.get("#input-field-text-name-baseInfo").type("OrganizationNameVendor")                        //add org. Name                                                                
        cy.get("#input-field-text-cin-contactIdentification").type("123456789Vendor")                   //add CIN                      
        cy.get("#generic-form-button").click().wait(1000)                               


        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("email.organizationVendor@flying-rat.online")         //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                                       //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes
      

        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)
        
        
        //go to tab - kontaktní osoby
        cy.get('.tabs__list > div:nth-child(14)').click()                                        //Přejde do Sekce kontaktní osoby                     
        cy.get("#field-select--null").click()
        cy.get('#field-text-firstName > .field-wrapper > .field-wrapper__main').type("VendorContactPersonName")                               
        cy.get('#field-text-lastName > .field-wrapper > .field-wrapper__main').type("VendorContactPersonSurname")                                 
        cy.get('#field-email-pin > .field-wrapper > .field-wrapper__main').type("emailContactPersonVendor@flying-rat.online")                      //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Creating Person - Worker
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                      //add method everywhere
        cy.get("#party-contact-list-worker").click()
        cy.get("#field-select--null__select").click()                                   //add click at physical person
        cy.get('#input-field-text-firstName-baseInfo').type("firstNameWorker")                               
        cy.get('#input-field-text-lastName-baseInfo').type("lastNameWorker")                                 
        cy.get('#input-field-email-pin-contactIdentification').type("emailWorker@flying-rat.online")                //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)
            

        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("emailWorker1@flying-rat.online")                    //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes


        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Working hours


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Creating Person - Candidate
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                      //add method everywhere
        cy.get("#party-contact-list-job-candidate").click()
        cy.get("#field-select--null__select").click()                                   //add click at physical person
        cy.get('#input-field-text-firstName-baseInfo').type("firstNameCandidate")                               
        cy.get('#input-field-text-lastName-baseInfo').type("lastNameCandidate")                                 
        cy.get('#input-field-email-pin-contactIdentification').type("emailCandidate@flying-rat.online")                //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)
            

        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("emailCandidate1@flying-rat.online")                    //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes


        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Editing Person - Agent
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                      //add method everywhere
        cy.get("#party-contact-list-agent").click()
        cy.get("#table-row-0").click()                                                  //add click at physical person
        cy.get('#input-field-text-firstName-baseInfo').type("firstNameAgent")                               
        cy.get('#input-field-text-lastName-baseInfo').type("lastNameAgent")                                 
        cy.get('#input-field-email-pin-contactIdentification').type("emailAgent@flying-rat.online")                //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)
            

        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("emailAgent1@flying-rat.online")                    //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes


        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //Editing Organization - Pickup Point
        //-------------------------------------------------------------------------------------------------------------------------------------------------------


        cy.get("#menu-party > .main-menu__module-wrapper").click()                      //add method everywhere
        cy.get("#party-contact-list-pickup-point").click()
        cy.get("#table-row-0").click()                                                  //add click at physical person
        cy.get('#input-field-text-firstName-baseInfo').type("firstNamePickupPoint")                               
        cy.get('#input-field-text-lastName-baseInfo').type("lastNamePickupPoint")                                 
        cy.get('#input-field-email-pin-contactIdentification').type("emailPickupPoint@flying-rat.online")                //add variable - email for creating
        cy.get("#generic-form-button").click().wait(1000)
            

        //go to tab - emails
        cy.get('.tabs__list > div:nth-child(3)').click()
        cy.get("#field-select--null").click()
        cy.get("#field-email-value").type("emailPickupPoint1@flying-rat.online")                    //add variable - email
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - telephone
        cy.get('.tabs__list > div:nth-child(4)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-phone-value").type("123456789")                                  
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Adress
        cy.get('.tabs__list > div:nth-child(5)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#field-text-addressLine1").type("adress")                                  
        cy.get("#field-text-city").type("city")                                  
        cy.get("#field-text-postalCode").type("14000")                                 
        cy.get("#field-select-countryCode-default").click()
        cy.get("#field-select-countryCode-default__select__element_0").click()
        cy.get("#generic-form-button").click().wait(1000)                               //add var "saveButton"??


        //go to tab - Notes


        //go to tab - SocialNetwork
        cy.get('.tabs__list > div:nth-child(7)').click()                                
        cy.get("#field-select--null").click()
        cy.get("#input-field-text-userId-default").type("Facebook")                     // přidá Facebook
        cy.get("#generic-form-button").click().wait(1000)
        
        cy.get("#field-select--null").click()
        cy.get('#field-select-socialNetworkTypeId-default > .field-wrapper > .field-wrapper__main').click()     // přidá Instagram
        cy.get('#field-select-socialNetworkTypeId-default__select__element_1').click()
        cy.get("#input-field-text-userId-default").type("Instagram")                                  
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - UserAccess
        cy.get('.tabs__list > div:nth-child(8)').click()                                
        cy.get("#field-select--null").click()
        cy.get('#field-search-userSearch__st').type("marek").wait(2000).type("{enter}")
        cy.get("#generic-form-button").click().wait(1000)


        //go to tab - Activity
        cy.get('.tabs__list > div:nth-child(11)').click()                                //Přidá defaultně vyplněnou aktivitu typu "Úkol"                     
        cy.get("#field-select--null").click()
        cy.get("#generic-form-button").click().wait(1000)

















    })
})  