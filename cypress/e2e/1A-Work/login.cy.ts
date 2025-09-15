import { contains } from "cypress/types/jquery"

const tenant = "qa-cypress"

describe('login screen', () => {


    it('Accept Cookies', () => {

        cy.visit("https://portal-alpha.elixeum.cloud").wait(1000)
        cy.get("#cookie-settings-button").click().wait(1000)
        cy.get('button').eq(0).click()                              // just looks at all buttons on page and click on first one (which is accept necesary [in terms of cookies])
        
    })


    it('disabled login button - login to Elixeum', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.get('#login-button').should('be.disabled')
    })


    it('failed login to Elixeum', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.fixture('secret.json').then((user) => {
            cy.get("#input-field-email-email-null").type(user.incorrect_email)
            cy.get("#input-field-password-password-null").type(user.incorrect_pass)
        });
        cy.get("#login-button").click()
        cy.get('.alert__text').contains("Přihlášení se nepovedlo: Špatné přihlašovací údaje")
    })


    it('successfull login to Elixeum', () => {

        cy.visit("https://portal-alpha.elixeum.cloud")                                                                              // Chcecks if logín through tenant screen still works properly
        cy.get("#tenantText").click().type(tenant)                                                                                  // Chcecks if logín through tenant screen still works properly
        cy.get("#tenantButton").click()                                                                                             // Chcecks if logín through tenant screen still works properly
        cy.fixture('secret.json').then((user) => {
            cy.get("#input-field-email-email-null").type(user.correct_email)
            cy.get("#input-field-password-password-null").type(user.correct_pass)
        });
        cy.get("#login-button").click()
        cy.url().should("include", "https://portal-alpha.elixeum.cloud/"+(tenant)+"/dashboard").wait(1000)
    })


    it('verifying background color', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.get('.login').should('have.css', 'background-color').and('eq', 'rgb(75, 51, 255)')
    })


    it('verifying inactive users', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.get("#input-field-email-email-null").type("lukas.vlcek+suspendovany@flying-rat.online")                                  // email and pasword will be set for shared tenant in the future
        cy.get("#input-field-password-password-null").clear().type("cAe8yA5jr#e6")
        cy.get("#login-button").click()
        cy.get('.alert__text').contains("Přihlášení se nepovedlo: Účet je uzamčen, prosím kontaktujte svého správce")
        cy.get('.alert__buttons > :nth-child(3)').click()

        cy.get("#input-field-email-email-null").clear().type("lukas.vlcek+uzamceny@flying-rat.online")
        cy.get("#input-field-password-password-null").clear().type("cAe8yA5jr#e6")
        cy.get("#login-button").click()
        cy.get('.alert__text').contains("Přihlášení se nepovedlo: Účet je uzamčen, prosím kontaktujte svého správce")
        cy.get('.alert__buttons > :nth-child(3)').click()

        cy.get("#input-field-email-email-null").clear().type("lukas.vlcek+zablokovany@flying-rat.online")
        cy.get("#input-field-password-password-null").clear().type("cAe8yA5jr#e6")
        cy.get("#login-button").click()
        cy.get('.alert__text').contains("Přihlášení se nepovedlo: Účet je uzamčen, prosím kontaktujte svého správce")
        cy.get('.alert__buttons > :nth-child(3)').click()

    })
})


describe('forgotten password', () => {

    it('password reset - no email, no password reset', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.get('.login__wrapper--login > .login__form > .login__text-button').click()
        cy.get('.login__dialog').contains("Zapomenuté heslo? 🔒")
        cy.get('#send-btn').should('be.disabled')
        cy.get("#input-field-email-emailreset-null").should("be.empty")

    })


    it('password reset', () => {

        cy.visit("https://portal-alpha.elixeum.cloud/"+(tenant)+"/login")
        cy.fixture('secret.json').then((user) => {
            cy.get("#input-field-email-email-null").type(user.correct_email)
        })
        cy.get('.login__wrapper--login > .login__form > .login__text-button').click()
        cy.get('.login__dialog').contains("Zapomenuté heslo? 🔒")
        cy.fixture('secret.json').then((user) => {
            cy.get("#input-field-email-emailreset-null").should("have.value", user.correct_email)

        })
    })



    

})
