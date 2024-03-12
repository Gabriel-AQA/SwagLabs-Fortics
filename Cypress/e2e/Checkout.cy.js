///<reference types="cypress"/>

describe("Testes em tela inicial", () => {
   
    beforeEach("Site", () => {
       cy.visit('https://www.saucedemo.com/v1/')
    })


it("informar todas as informações de checkout", () => {
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
})

it("informar nenhuma das informações de checkout", () => {
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
   
//finalizar
cy.get("#checkout_info_container > div > form > div.checkout_buttons > input").click()
//verificar
cy.get("#checkout_info_container > div > form > h3").should("have.text", "Error: First Name is required")
}) 

it("Informar apenas nome em checkout", () => {
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
 // informar nome
 cy.get("#first-name").type("Gabriel")  
//finalizar
 cy.get("#checkout_info_container > div > form > div.checkout_buttons > input").click()
//verificar
 cy.get("#checkout_info_container > div > form > h3").should("have.text", "Error: Last Name is required")
    })  
it("Não informar o Zip em checkout", () => {
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
 // informar nome
 cy.get("#first-name").type("Gabriel")
 cy.get("#last-name").type("Lira")
       
              
//finalizar
 cy.get("#checkout_info_container > div > form > div.checkout_buttons > input").click()
//verificar
 cy.get("#checkout_info_container > div > form > h3").should("have.text", "Error: Postal Code is required")
    })
  //Final do checkout 1

})
       
       
       
