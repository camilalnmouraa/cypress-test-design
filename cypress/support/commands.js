import helpers from '../helpers/Helpers';

Cypress.Commands.add('login', (usuario, senha) => {
  // Clicar no botão "Entrar" na página inicial
  helpers.clicar('a[aria-label="Ir para página de login da Serasa"]');
  
  // Preencher o campo de CPF e avançar
  helpers.escrever('#f-cpf', usuario); 
  helpers.clicar('.btn-submit');
  
  // Preencher o campo de senha e avançar
  helpers.escrever('#current-password', senha); 
  helpers.clicar('.btn-submit');
});