 # SwagLabs

  Programa de teste para a automação do WebSite SwagLabs usando cypress

  ## Pré-Requisitos

   - [NodeJS](https://nodejs.org/en/download/)

   ## Ferramentas que foram utilizadas

   - [Vscode](https://code.visualstudio.com/)
   - [Cypress](https://www.npmjs.com/package/cypress)

   ## Instalação e Utilização

   - para utilização dos códigos usar o **Terminal**

   ### Codigos de instalação

   1. instalar pacodes e dependencias do **NodeJS**
    
    npm init    

   2. Intalar Cypress

    npm install cypress

   ### Utilização de Cypress

   - Para abrir o cypress digite: 
   
    npx cypress open

   - Para executar os codigos diretamente, sem abrir o cypress use: 

    npx cypress run


  ### Logica utilizada

   Para os testes em cypress eu usei describe: para compactar os cenários que eu usaria nos testes com o before each
  para o direcionamento ao site testado, e para a implementação dos casos foi utilizado it:

  1. O Cenário de login foi feito tendo em mente todas as possibilidades de testes com nomes e senhas possivéis
  com apenas testes bem sucedidos, utilizando as informações fornecidas pelas telas de erros e direcionamente a tela
  inicial.

  2. O Cenário Inicial se trata de todas as possibilidades de se fazer na tela inicial do sistema, pegando todas as
  opções de botões e verificando se estão levando ao lugar correto, e a ordenação foi verificada pela troca de valor
  entre elas para ter a certeza de que estaria sendo trocada a selecionar outras opções de ordenação.

  3. O cenário do Produto foi os testes de botões que se mantiam lá, foi testado apenas com um dos produtos mas o 
  com teste de direcionameno para ter a certeza de que estaria levando a tela de produto correta
  e a verificação de botão para adicionar item ao carrinho por essa tela de carrinho.

  4. O cenário do Carrinho foi pensado de forma a verificar se os botões internos na tela estariam funcionando de 
  forma que gostariamos

  5. O Cenário de checkout foram feitos testes parecidos com os de login, testando as opções de informações diversas
  e a verificação de erro ou sucesso por dados específicos

  6. O cenário de checkout 2 foi a mudança correta de site e os botões que os possibilitariam voltar e finalizar o checkout, agora vendo a tela de envio 
       
    

