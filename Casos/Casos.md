# Casos colocados a teste

 <h2>Cenário</h2>

Login bem sucedido


  <h3>Pré-Requisitos</h3>

O usuário deve conter uma conta com usuário e senha

  <h3>Procedimento</h3>
     
1. Informar nome de Usuário no campo Username
2. Informar senha no campo password
3. Clicar em botão Login

  <h3>Resultado esperado</h3>

O sistema deve executar um login na conta das informações informadas e direcionar para tela inicial do site  

<hr>

  <h2>Cenário</h2>

Login mal sucedido por Username

  <h3>Pré-Requisitos</h3>

O usuário deve conter uma conta com usuário e senha 

  <h3>Procedimento</h3>
     
1. Informar vazio no campo Username
2. Informar senha no campo password
3. Clicar em botão Login

  <h3>Resultado esperado</h3>   

O sistema deve informar ao usuário que o campo de usuário ou senha está incorreto

<hr>

 <h2>Cenário</h2>

Login mal sucedido por senha

  <h3>Pré-Requisitos</h3>

O usuário deve conter uma conta com usuário e senha

  <h3>Procedimento</h3>
     
1. Informar nome de Usuário no campo Username
2. Informar vazio no campo password  
3. Clicar em botão Login

 <h3>Resultado esperado</h3>
O sistema deve informar ao usuário que o campo de usuário ou senha está incorreto 

<hr>

<h2>Cenário</h2>

  Abrir a tela inicial

  <h3>Pré-Requisitos</h3>

O usuário deve ter completado o Login

  <h3>Procedimento</h3>
     
1. Informar nome de Usuário no campo Username
2. Informar vazio no campo password  
3. Clicar em botão Login
4. O sistema irá abrir a tela inicial automaticamente

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/inventory.html

<hr>

<h2>Cenário</h2>

  Teste de Botão "Add to Cart" em produtos

  <h3>Pré-Requisitos</h3>

 O usuário deve estar na tela inicial com acesso a os produtos

  <h3>Procedimento</h3>
     
1. O usuário deve apertar no botão "add to cart" do lado dos produtos

  <h3>Resultado esperado</h3>

 O botão deve mudar para "Remove" e deve aparecer um "1" acima do carrinho

<hr>

<h2>Cenário</h2>

  Teste de botão "Remove" em produtos

  <h3>Pré-Requisitos</h3>

O usuário deve ter apertado no botão "add to cart" desse mesmo produto anteriormente

  <h3>Procedimento</h3>
     
1. Na tela inicial, o usuário deve apertar em "Remove" ao lado de um produto que está em seu carrinho

  <h3>Resultado esperado</h3>

 o botão deve voltar a ser "add to cart" e o "1" acima do carrinho deve desaparecer

<hr>

<h2>Cenário</h2>

  Abrir a tela do carrinho

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela inicial

  <h3>Procedimento</h3>
     
1. O usuario deve apertar no símbulo de carrinho no canto superior direito

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/cart.html

<hr>

<h2>Cenário</h2>

  Ordenar produtos

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela inicial

  <h3>Procedimento</h3>
     
1. O usuario deve apertar na opção a direita na tela inicialmente em "Name (A to Z)"
2. o usuário deve seguir para a opção "Name (Z to A)"

  <h3>Resultado esperado</h3>

 Todos os itens devem ser ordenados de forma que as roupas que estão a mais próximas de Z estejam no inicio dos produtos

 <hr>

<h2>Cenário</h2>

  Abrir produto

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela inicial

  <h3>Procedimento</h3>
     
1. O usuario deve apertar em algum dos produtos em tela

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/inventory-item.html?id=(depende do produto clicado, de 0 a 5)

 <hr>

<h2>Cenário</h2>

  Adicionar produto em carrinho pela tela de produto

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela de algum dos produtos

  <h3>Procedimento</h3>
     
1. O usuario deve apertar em "add to cart"

  <h3>Resultado esperado</h3>

 O botão deve mudar para "Remove" e deve aparecer um "1" acima do carrinho

 <hr>

 <h2>Cenário</h2>

  Testar "Remove" pela tela de produto 

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela de algum dos produtos

  <h3>Procedimento</h3>
     
1. O usuario deve apertar em "remove"

  <h3>Resultado esperado</h3>

 o botão deve voltar a ser "add to cart" e o "1" acima do carrinho deve desaparecer

 <hr>

 <h2>Cenário</h2>

  Testar "<_ Back" em produtos

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela de algum dos produtos

  <h3>Procedimento</h3>
     
1. O usuario deve apertar em "<_ Back"

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/inventory.html

 <hr>

<h2>Cenário</h2>

 Remover produto pelo carrinho

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela do Carrinho

  <h3>Procedimento</h3>
     
1. o Usuário deve ter colocado um produto no carrinho
2. Na tela do Carrinho clicar em "Remove"

  <h3>Resultado esperado</h3>

  O produto será removido do carrinho

 <hr>

 <h2>Cenário</h2>

  Botão "continue shopping" 

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela do Carrinho

  <h3>Procedimento</h3>
     
1. Apertar no botão "continue shopping" da tela

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/inventory.html

 <hr>

 <h2>Cenário</h2>

  Botão "continue shopping" 

  <h3>Pré-Requisitos</h3>

O usuário deve estar na tela do Carrinho

  <h3>Procedimento</h3>
     
1. Apertar no botão "continue shopping" da tela

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/inventory.html

 <hr>

 <h2>Cenário</h2>

Botão de "Checkout" com produtos no carrinho

  <h3>Pré-Requisitos</h3>

O usuário deve ter adicionado um produto no carrinho e estar na tela do Carrinho

  <h3>Procedimento</h3>
     
1. Adicionar um produto no carrinho
2. Abrir o carrinho
3. Clicar no Botão "Checkout"

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/checkout-step-one.html

 <hr>

 <h2>Cenário</h2>

Botão de "Checkout" sem produtos no carrinho

  <h3>Pré-Requisitos</h3>

O usuário não deve conter produtos no carrinho e estar na tela do Carrinho

  <h3>Procedimento</h3>
     
1. Remover qualquer produto do carrinho
2. Clicar no Botão "Checkout"

  <h3>Resultado esperado</h3>

  O sistema deve informar que não é possível fazer checkout sem produtos 

  <h3>Resultado Encontrado</h3>

   A URL do site é mudado para https://www.saucedemo.com/v1/checkout-step-one.html

 <hr>

  <h2>Cenário</h2>

 Completar primeira etapa de checkout

  <h3>Pré-Requisitos</h3>

O usuário deve ter adicionado um produto no carrinho e estar na tela de checkout

  <h3>Procedimento</h3>
     
1. Adicionar um produto no carrinho
2. Abrir o carrinho
3. Clicar no Botão "Checkout"
4. Informar os dados de nome, último nome e ZIP
5. Clicar em "Continue" 

  <h3>Resultado esperado</h3>

 A URL do site deve mudar para https://www.saucedemo.com/v1/checkout-step-two.html

 <hr>

  <h2>Cenário</h2>

  Não colocar dados de checkout

  <h3>Pré-Requisitos</h3>

O usuário deve ter adicionado um produto no carrinho e ter apertado em checkout

  <h3>Procedimento</h3>
     
1. Adicionar um produto no carrinho
2. Abrir o carrinho
3. Clicar no Botão "Checkout"
4. não informar os dados pedidos em checkout
5. Clicar em "Continue"

  <h3>Resultado esperado</h3>

 Informar falta de Nome

 <hr>

 <h2>Cenário</h2>

  Colocar apenas nome em checkout

  <h3>Pré-Requisitos</h3>

O usuário deve ter adicionado um produto no carrinho e ter apertado em checkout

  <h3>Procedimento</h3>
     
1. Adicionar um produto no carrinho
2. Abrir o carrinho
3. Clicar no Botão "Checkout"
4. informar apenas o nome entre os dados pedidos em checkout
5. Clicar em "Continue"

  <h3>Resultado esperado</h3>

 Informar falta de último nome

 <hr>

  <h2>Cenário</h2>

  Colocar apenas nome e último nome em checkout

  <h3>Pré-Requisitos</h3>

O usuário deve ter adicionado um produto no carrinho e ter apertado em checkout

  <h3>Procedimento</h3>
     
1. Adicionar um produto no carrinho
2. Abrir o carrinho
3. Clicar no Botão "Checkout"
4. informar apenas o nome e o último nome entre os dados pedidos em checkout
5. Clicar em "Continue"

  <h3>Resultado esperado</h3>

 Informar falta de Postal Code(ZIP)

 <hr>

  <h2>Cenário</h2>

  Finalizar todo checkout

  <h3>Pré-Requisitos</h3>

O usuário deve ter Completado os dados anteriores corretamente e ter apertado em continue

  <h3>Procedimento</h3>
     
1. Completar dados pedidos em checkout
2. Apertar em Continue
3. Em tela de checkout final, apertar em Finish


  <h3>Resultado esperado</h3>

  A URL do site deve mudar para https://www.saucedemo.com/v1/checkout-complete.html

 <hr>

 <h2>Cenário</h2>

  Cancelar todo checkout

  <h3>Pré-Requisitos</h3>

O usuário deve ter Completado os dados de Checkout corretamente e ter apertado em continue

  <h3>Procedimento</h3>
     
1. Completar dados pedidos em checkout
2. Apertar em Continue
3. Em tela de checkout final, apertar em Cancel


  <h3>Resultado esperado</h3>

  A URL do site deve mudar para https://www.saucedemo.com/v1/inventory.html

 <hr>