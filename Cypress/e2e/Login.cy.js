///<reference types="cypress"/>

describe("Formas de Login", () => {

   beforeEach("Site", () => {
      //endereço do site testado, eu poderia mmudar ele para uma etapa avançada a cada teste, mas prefiro manter a parte do login
      cy.visit('https://www.saucedemo.com/v1/')
   })
   it("Login com usuário 1", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("standard_user")
      //colocar senha
      cy.get("#password").type("secret_sauce")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mudança do site
      cy.url().should('include', '/inventory')
   })

   it("Login com usuário 2", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("locked_out_user")
      //colocar senha
      cy.get("#password").type("secret_sauce")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mensagem de erro
      cy.get('#login_button_container > div > form > h3').should('have.text', "Epic sadface: Sorry, this user has been locked out.")
   })

   it("Login com usuário 3", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("problem_user")
      //colocar senha
      cy.get("#password").type("secret_sauce")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mudança do site
      cy.url().should('include', '/inventory')
   })

   it("Login com usuário 4", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("performance_glitch_user")
      //colocar senha
      cy.get("#password").type("secret_sauce")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mudança do site
      cy.url().should('include', '/inventory')
   })

   it("Login mal sucessido por senha e username 1", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("standard_user")
      //colocar senha
      cy.get("#password").type("123456")
      //clicar no botão  
      cy.get("#login-button").click()
      //verificar mensagem de erro
      cy.get('#login_button_container > div > form > h3').should('have.text', "Epic sadface: Username and password do not match any user in this service")

   })
   it("Login mal sucessido por senha e username 2", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("locked_out_user")
      //colocar senha
      cy.get("#password").type("123456")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mensagem de erro
      cy.get('#login_button_container > div > form > h3').should('have.text', "Epic sadface: Username and password do not match any user in this service")

   })

   it("Login mal sucessido por senha e username 3", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("problem_user")
      //colocar senha
      cy.get("#password").type("123456")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mensagem de erro
      cy.get('#login_button_container > div > form > h3').should('have.text', "Epic sadface: Username and password do not match any user in this service")

   })
   it("Login mal sucessido por senha e username 4", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("performance_glitch_user") //tem realmente um problema de performance
      //colocar senha
      cy.get("#password").type("123456")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mensagem de erro
      cy.get('#login_button_container > div > form > h3').should('have.text', "Epic sadface: Username and password do not match any user in this service")

   })
   it("Login mal sucessido por Username", () => {
      //colocar nome de usuario
      cy.get("#user-name").type("123456")
      //colocar senha
      cy.get("#password").type("secret_sauce")
      //clicar no botão
      cy.get("#login-button").click()
      //verificar mensagem de erro
      cy.get('#login_button_container > div > form > h3').should('have.text', "Epic sadface: Username and password do not match any user in this service")

   })
})