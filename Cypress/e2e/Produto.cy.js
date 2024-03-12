///<reference types="cypress"/>

describe("Testes em tela inicial", () => {
   
    beforeEach("Site", () => {
       cy.visit('https://www.saucedemo.com/v1/')
    })

    it("Adicionar item ao carinho por produto", ()=> {
        //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //abrir produto
    cy.get("#item_4_title_link > div").click()
     cy.url().should("include", "/inventory-item.html?id=4")
     //adicionar a carinho
     cy.get("#inventory_item_container > div > div > div > button").click()
    //troca de botão
    cy.get("#inventory_item_container > div > div > div > button").should("have.text", "REMOVE")
    //verificar carrinho
    cy.get('#shopping_cart_container > a > span').should("have.text", "1")
    }) 

    it("Remover produto por tela do produto", ()=> {
   //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //abrir produto
    cy.get("#item_4_title_link > div").click()
    cy.url().should("include", "/inventory-item.html?id=4")
    //adicionar a carinho
    cy.get("#inventory_item_container > div > div > div > button").click()
    //verificar carrinho
    cy.get('#shopping_cart_container > a > span').should("have.text", "1")
    //troca de botão
    cy.get("#inventory_item_container > div > div > div > button").click()
    
    })
    it("Testar opção de <_back de produto", ()=> {
        //login
         cy.get("#user-name").type("standard_user")
         cy.get("#password").type("secret_sauce")
     
         cy.get("#login-button").click()
         //abrir produto
         cy.get("#item_4_title_link > div").click()
         cy.url().should("include", "/inventory-item.html?id=4")
         //APERTAR BACK
         cy.get(".inventory_details_back_button").click({force:true})
         //verificar mudança
         cy.url().should("include", "/inventory")
         //final dos testes de produtos
    })
 })