import helpers from '../helpers/Helpers';

describe('Teste de Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve fazer login com credenciais válidas', () => {
    cy.login(Cypress.env('usuario-valido'), Cypress.env('senha-valida'));
    helpers.verificarUrl('/area-cliente');
    helpers.verificarVisibilidade('p[data-testid="topbar-title"]', 'Olá, Camila');
  });

  it('Deve exibir erro ao inserir um CPF inválido', () => {
    helpers.clicar('a[aria-label="Ir para página de login da Serasa"]');
    helpers.escrever('#f-cpf', Cypress.env('usuario_invalido'));
    helpers.verificarVisibilidade('p[role="alert"]','CPF inválido.'); // Verifica que a mensagem de erro de CPF inválido é exibida
    cy.get('.btn-submit').should('be.disabled'); // Verifica que o botão "Continuar" está desabilitado
  });

  it('Deve exibir erro ao inserir uma senha inválida com CPF válido', () => {
    helpers.clicar('a[aria-label="Ir para página de login da Serasa"]');
    helpers.escrever('#f-cpf', Cypress.env('usuario-valido'));
    helpers.clicar('.btn-submit');
    helpers.escrever('#current-password', Cypress.env('senha_invalida')); // Insere uma senha inválida e tenta continuar
    helpers.clicar('.btn-submit');
    helpers.verificarVisibilidade('.mensagem-erro', 'Credenciais inválidas');// Verifica que a mensagem de erro para senha inválida é exibida
  });
});