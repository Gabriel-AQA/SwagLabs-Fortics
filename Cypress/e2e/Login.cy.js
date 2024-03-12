///<reference types="cypress"/>

 describe("Formas de Login", () => {
   
   beforeEach("Site", () => {
      cy.visit('https://www.saucedemo.com/v1/')
   })
   it("Login com usuário 1", ()=> {
      cy.get("#user-name").type("standard_user")
      cy.get("#password").type("secret_sauce")

      cy.get("#login-button").click()

      cy.url().should('include', '/inventory')
  }) 
   
  it("Login com usuário 2", ()=> {
   cy.get("#user-name").type("locked_out_user")
   cy.get("#password").type("secret_sauce")

   cy.get("#login-button").click()

   cy.get('#login_button_container > div > form > h3').should('have.text',"Epic sadface: Sorry, this user has been locked out.")
})

it("Login com usuário 3", ()=> {
   cy.get("#user-name").type("problem_user")
   cy.get("#password").type("secret_sauce")

   cy.get("#login-button").click()

   cy.url().should('include', '/inventory')
})

it("Login com usuário 4", ()=> {
   cy.get("#user-name").type("performance_glitch_user")
   cy.get("#password").type("secret_sauce")

   cy.get("#login-button").click()

   cy.url().should('include', '/inventory')
})

it("Login mal sucessido por senha e username 1", ()=> {
   cy.get("#user-name").type("standard_user")
   cy.get("#password").type("123456")

   cy.get("#login-button").click()

   cy.get('#login_button_container > div > form > h3').should('have.text',"Epic sadface: Username and password do not match any user in this service")
   
})
it("Login mal sucessido por senha e username 2", ()=> {
   cy.get("#user-name").type("locked_out_user")
   cy.get("#password").type("123456")

   cy.get("#login-button").click()

   cy.get('#login_button_container > div > form > h3').should('have.text',"Epic sadface: Username and password do not match any user in this service")
   
})

it("Login mal sucessido por senha e username 3", ()=> {
   cy.get("#user-name").type("problem_user")
   cy.get("#password").type("123456")

   cy.get("#login-button").click()

   cy.get('#login_button_container > div > form > h3').should('have.text',"Epic sadface: Username and password do not match any user in this service")
   
})
it("Login mal sucessido por senha e username 4", ()=> {
   cy.get("#user-name").type("performance_glitch_user")
   cy.get("#password").type("123456")

   cy.get("#login-button").click()

   cy.get('#login_button_container > div > form > h3').should('have.text',"Epic sadface: Username and password do not match any user in this service")
   
 })
it("Login mal sucessido por Username", ()=> {
   cy.get("#user-name").type("123456")
   cy.get("#password").type("secret_sauce")

   cy.get("#login-button").click()

   cy.get('#login_button_container > div > form > h3').should('have.text',"Epic sadface: Username and password do not match any user in this service")
   
 })
})