# Automação de Testes para Plataforma Serasa

Projeto de automação para a funcionalidade de [`Login`](cypress/e2e/login.cy.js) e [`Navegação entre os Menus`](cypress/e2e/navegacao.cy.js) na plataforma do [Serasa](https://www.serasa.com.br/), utilizando o framework [Cypress](https://www.cypress.io/), onde:

- **Login:** Valida o fluxo de autenticação, incluindo cenários com credenciais válidas, inválidas e campos obrigatórios.
- **Navegação:** Testes de navegação entre menus, garantindo que cada menu exibe o conteúdo correto e funcional.


## Estrutura do Projeto

```plaintext
cypress/
├── e2e/
│   ├── login.cy.js       # Testes para a funcionalidade de Login
│   ├── navegacao.cy.js   # Testes para a navegação entre menus
├── support/
│   ├── commands.js       # Comandos customizados para reutilização de código
│   ├── helpers.js        # Funções genéricas para manipulação de elementos
├── fixtures/             # Arquivos de dados de teste estáticos

```


## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (usei a versão `2.45.2` ao escrever este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v20.14.0` ao escrever este documento)
- npm (usei a versão `10.7.0` ao escrever este documento)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar.)

## Configurando as variáveis ​​de ambiente

Antes de executar os testes, configure as variáveis de ambiente do projeto:

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e defina o valor da variável.

**Observação:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless, tanto em viewports de desktop quanto de iphone.

### Modo headless

Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless.


### Modo interativo

Execute `npx cypress open` para abrir o **Cypress App** para executar testes no modo interativo usando uma viewport de desktop.

> Após rodar os testes, o resultado esperado deve ser semelhante a este:


```sh

  Running:  login.cy.js                                                                     (1 of 2)


  Teste de Login
    1) Deve fazer login com credenciais válidas
    √ Deve exibir erro ao inserir um CPF inválido (8849ms)
    2) Deve exibir erro ao inserir uma senha inválida com CPF válido


  1 passing (37s)
  2 failing

  1) Teste de Login
       Deve fazer login com credenciais válidas:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `#current-password`, but never found it.
      at Helpers.escrever (webpack://cypress-test-design/./cypress/helpers/Helpers.js:7:7)
      at Context.eval (webpack://cypress-test-design/./cypress/support/commands.js:12:10)

  2) Teste de Login
       Deve exibir erro ao inserir uma senha inválida com CPF válido:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `#current-password`, but never found it.
      at Helpers.escrever (webpack://cypress-test-design/./cypress/helpers/Helpers.js:7:7)
      at Context.eval (webpack://cypress-test-design/./cypress/e2e/login.cy.js:25:12)

  Teste de Navegação
    1) Deve navegar para a página de Finanças
    2) Deve navegar para a página de Serviços
    3) Deve clicar em Consultar meu Score Serasa


  0 passing (26s)
  3 failing

  1) Teste de Navegação
       Deve navegar para a página de Finanças:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `a[href="/area-cliente/saude-financeira"]`, but never found it.
      at Helpers.clicar (webpack://cypress-test-design/./cypress/helpers/Helpers.js:3:7)
      at Context.eval (webpack://cypress-test-design/./cypress/e2e/navegacao.cy.js:11:12)

  2) Teste de Navegação
       Deve navegar para a página de Serviços:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `a[href="/area-cliente/solucoes"]`, but never found it.
      at Helpers.clicar (webpack://cypress-test-design/./cypress/helpers/Helpers.js:3:7)
      at Context.eval (webpack://cypress-test-design/./cypress/e2e/navegacao.cy.js:17:12)

  3) Teste de Navegação
       Deve clicar em Consultar meu Score Serasa:
     AssertionError: Timed out retrying after 4000ms: Expected to find element: `a[href="/area-cliente/solucoes"]`, but never found it.
      at Helpers.clicar (webpack://cypress-test-design/./cypress/helpers/Helpers.js:3:7)
      at Context.eval (webpack://cypress-test-design/./cypress/e2e/navegacao.cy.js:23:12)

```

> Durante o desenvolvimento dos testes automatizados, foi identificado que o site utiliza uma solução de segurança chamada DataDome. Esse serviço tem como objetivo proteger a aplicação contra acessos não autorizados, incluindo automações como as realizadas por ferramentas de teste, como o Cypress.

O DataDome funciona detectando e bloqueando padrões de comportamento que não se assemelham aos de um usuário humano, como a execução de scripts automatizados. No caso deste desafio técnico, isso impede que os testes sejam executados completamente, causando os erros apresentados no resultado esperado acima.

Embora soluções alternativas possam ser implementadas (como configurar um ambiente de homologação sem o DataDome), tal mudança requer acesso administrativo à aplicação.

___

This project was created with ☕ and 💟 by [Camila Moura](https://linkedin.com/in/camilalnmoura).
