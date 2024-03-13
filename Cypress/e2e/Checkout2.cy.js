///<reference types="cypress"/>

describe("Testes em tela inicial", () => {

   beforeEach("Site", () => {
      cy.visit('https://www.saucedemo.com/v1/')
   })
   it("Finalizar Checkout", () => {
      //login
      cy.get("#user-name").type("standard_user")
      cy.get("#password").type("secret_sauce")

      cy.get("#login-button").click()
      //Adicionar produto
      cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").click()
      //verificar carrinho
      cy.get('#shopping_cart_container > a > span').should("have.text", "1")
      //abrir carrinho
      cy.get("#shopping_cart_container > a > svg").click()
      //Apertar checkout
      cy.get("#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button").click()
      //verificar mudança
      cy.url().should("include", "/checkout-step-one")

      //informar dados
      cy.get("#first-name").type("Gabriel")
      cy.get("#last-name").type("Lira")
      cy.get("#postal-code").type("000000")
      //finalizar
      cy.get("#checkout_info_container > div > form > div.checkout_buttons > input").click()
      //verificar
      cy.url().should("include", "/checkout-step-two")
      //finalizar 100%
      cy.get("#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button").click()
      cy.url().should("include", "/checkout-complete")
   })
   it("Cancelar Checkout", () => {
      //login
      cy.get("#user-name").type("standard_user")
      cy.get("#password").type("secret_sauce")

      cy.get("#login-button").click()
      //Adicionar produto
      cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").click()
      //verificar carrinho
      cy.get('#shopping_cart_container > a > span').should("have.text", "1")
      //abrir carrinho
      cy.get("#shopping_cart_container > a > svg").click()
      //Apertar checkout
      cy.get("#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button").click()
      //verificar mudança
      cy.url().should("include", "/checkout-step-one")

      //informar dados
      cy.get("#first-name").type("Gabriel")
      cy.get("#last-name").type("Lira")
      cy.get("#postal-code").type("000000")
      //finalizar
      cy.get("#checkout_info_container > div > form > div.checkout_buttons > input").click()
      //verificar
      cy.url().should("include", "/checkout-step-two")
      //finalizar 100%
      cy.get("#checkout_summary_container > div > div.summary_info > div.cart_footer > a.cart_cancel_link.btn_secondary").click()
      cy.url().should("include", "/inventory")
   })
   //Fim de testes   
})