/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Essa classe representa as actions referentes ao teste de login
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

import { LoginElements } from "pages/login/login-page";

export class LoginFormPage {

  /**
  * Captura o acesso a tela de login
  */
   public get getAcessoLogin(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.acessoTelaLogin);
  }

  /**
  * Captura o título da tela de login
  */
   public get getTituloTelaLogin(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.tituloTelaLogin);
  }

  /**
  * Captura o campo user
  */
   public get getUsername(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.inputEmail);
  }

  /**
  * Captura o campo password
  */
   public get getPassword(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.inputSenha);
  }

  /**
  * Captura o botão submit
  */
   public get getButtonSubmit(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.buttonSubmit);
  }

  /**
  * Captura a mensagem de falha no login
  */
   public get getMensagemFalhaLogin(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.mensagemLoginFalha);
  }

  /**
  * Captura o input de pesquisa
  */
   public get getInputPesquisa(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.inputPesquisa);
  }

  /**
  * Captura o botão de pesquisa
  */
   public get getBtnPesquisa(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.btnPesquisa);
  }

  /**
  * Captura a mensagem de resultado da pesquisa
  */
   public get getMensagemPesquisa(): Cypress.Chainable<JQuery> {
    return cy.get(LoginElements.mensagemResultadoSearch);
  }
}

