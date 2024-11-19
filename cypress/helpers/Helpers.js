class Helpers {
  clicar(seletor) {
    cy.get(seletor).click();
  }

  escrever(seletor, texto) {
    cy.get(seletor).type(texto);
  }

  verificarVisibilidade(seletor, textoEsperado) {
    cy.get(seletor).should('be.visible').and('contain', textoEsperado);
  }

  verificarUrl(urlEsperada) {
    cy.url().should('include', urlEsperada);
  }
}

export default new Helpers();
