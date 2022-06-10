import { LoginElements } from "pages/login/login-page";
import { LoginFormPage } from "support/actions/login/login-actions.page";

/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Essa classe realiza o acesso ao login
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

describe('/login page', () => {
  it('deverá realizar o login no e-commerce', () => {
    const page = new LoginFormPage();

        cy.visit(LoginElements.urlLogin);

        page.getAcessoLogin.click();

        page.getTituloTelaLogin.should('be.visible').contains('Authentication');

        page.getUsername.type('teste@gmail.com');

        page.getPassword.type('senhasenha');

        page.getButtonSubmit.click();

        page.getMensagemFalhaLogin.should('be.visible').contains('Authentication failed.');
    });

    it('deverá realizar uma pesquisa por Faded Short Sleeve T-shirts', () => {
      const page = new LoginFormPage();

      cy.visit(LoginElements.urlLogin);

      page.getInputPesquisa.type('Faded Short Sleeve T-shirts');

      page.getBtnPesquisa.click();

      page.getMensagemPesquisa.should('be.visible').contains('1 result has been found.');
   });
});
