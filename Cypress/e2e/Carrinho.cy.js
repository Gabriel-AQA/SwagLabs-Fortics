///<reference types="cypress"/>

describe("Testes em tela inicial", () => {
   
    beforeEach("Site", () => {
       cy.visit('https://www.saucedemo.com/v1/')
    })

   it("Remover por carrinho", ()=> {
 //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
 //Adicionar produto
    cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").click()
 //verificar carrinho
    cy.get('#shopping_cart_container > a > span').should("have.text", "1")
 //Abrir carrinho
    cy.get("#shopping_cart_container > a > svg").click()
 //remover
    cy.get("#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > button").click()  
  })
  it("Botão de continue shopping", ()=> {
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
 //Apertar Botão
    cy.get("#cart_contents_container > div > div.cart_footer > a.btn_secondary").click()
 //verificar mudança
    cy.url().should("include", "/inventory")
  })
  it("Botão de checkout com produto", ()=> {
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
  })
  it("Botão de checkout sem produto", ()=> {
 //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
 //abrir carrinho
    cy.get("#shopping_cart_container > a > svg").click()
 //Apertar checkout
    cy.get("#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button").click()
 //verificar mudança
    cy.url().should("include", "/checkout-step-one")
  })
  //Fim de testes no Carrinho
})
