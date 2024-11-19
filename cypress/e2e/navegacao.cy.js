// Arquivo de cenários automatizados: navegacao.cy.js

import helpers from '../helpers/Helpers';

describe('Teste de Navegação', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve navegar para a página de Finanças', () => {
    helpers.clicar('a[href="/area-cliente/saude-financeira"]');
    helpers.verificarUrl('/area-cliente/saude-financeira');
    helpers.verificarVisibilidade('a.menu__active', 'Finanças'); // Verifica que a página de Finanças foi carregada corretamente
  });

  it('Deve navegar para a página de Serviços', () => {
    helpers.clicar('a[href="/area-cliente/solucoes"]');
    helpers.verificarUrl('/area-cliente/solucoes');
    helpers.verificarVisibilidade('a.menu__active', 'Serviços'); // Verifica que a página de Serviços foi carregada corretamente
  });

  it('Deve clicar em Consultar meu Score Serasa', () => {
    helpers.clicar('a[href="/area-cliente/solucoes"]');
    helpers.verificarUrl('/area-cliente/solucoes');
    helpers.clicar('div.card-menu__top');
    helpers.verificarVisibilidade('h1', 'Sua saúde financeira'); // Verifica que a página de saúde financeira foi carregada corretamente
  });
});