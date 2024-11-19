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

Execute `npm run cy:open` para abrir o **Cypress App** para executar testes no modo interativo usando uma viewport de desktop.

> Após rodar os testes, o resultado esperado deve ser semelhante a este:


```sh



```

___

This project was created with ☕ and 💟 by [Camila Moura](https://linkedin.com/in/camilalnmoura).
