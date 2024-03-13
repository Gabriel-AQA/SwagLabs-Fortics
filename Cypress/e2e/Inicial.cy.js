///<reference types="cypress"/>

describe("Testes em tela inicial", () => {

  beforeEach("Site", () => {
    cy.visit('https://www.saucedemo.com/v1/')
  })


  it("Adicionar item de carrinho", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //teste
    cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").click()
    //troca de botão
    cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").should("have.text", "REMOVE")
    //verificar carrinho
    cy.get('#shopping_cart_container > a > span').should("have.text", "1")
  })

  it("Remover item de carrinho", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //teste
    cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").click()
    //verificar carrinho
    cy.get('#shopping_cart_container > a > span').should("have.text", "1")
    //remover do carrinho
    cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").click()
    //Verificar se voltou
    cy.get("#inventory_container > div > div:nth-child(1) > div.pricebar > button").should("have.text", "ADD TO CART")
    //percebi que as classes mudam de acordo com o botão, mas quis verificar pelo texto para o teste mais a fundo e garantido
    //tbm pq n sei como verificar se algo sumiu e algo pegou seu lugar(mesmo de forma separada)
  })
  it("Abrir carinho", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //teste
    cy.get("#shopping_cart_container > a > svg").click()
    //veriicar troca
    cy.url().should("include", "/cart")
  })

  //Teste de ordenação

  it("Ordenação dos itens A to Z", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //Ordenar produtos de forma que vai de A a Z
    cy.get("#inventory_filter_container > select").select(0)
    cy.get("#inventory_filter_container > select").should("have.value", "az")
  })
  it("Ordenação dos itens Z to A", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //Ordenar produtos de forma que vai de Z a A
    cy.get("#inventory_filter_container > select").select(1)
    cy.get("#inventory_filter_container > select").should("have.value", "za")
  })
  it("Ordenação dos itens Preço baixo a alto", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //Colocar a opção de menor preço a maior
    cy.get("#inventory_filter_container > select").select(2)
    cy.get("#inventory_filter_container > select").should("have.value", "lohi")
  })
  it("Ordenação dos itens Preço alto a baixo", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //Colocar a opção de maior preço ao menor
    cy.get("#inventory_filter_container > select").select(3)
    cy.get("#inventory_filter_container > select").should("have.value", "hilo")
  })

  //Abrir produto
  it("Abrir produto aleatorio", () => {
    //login
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")

    cy.get("#login-button").click()
    //testar abrir o produto com id 4
    cy.get("#item_4_title_link > div").click()
    cy.url().should("include", "/inventory-item.html?id=4")
  })
  //Daqui iremos para os testes na tela de produto, proximo arquivo
})    