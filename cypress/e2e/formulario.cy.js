describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/cadastro'); //   URL do form de cadastro
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    cy.get('#nome').type('Daniel Souza');
    cy.get('#email').type('leinadss2011@gmail.com');
    cy.get('#confirmacaoEmail').type('leinadss2011@gmail.com');
    cy.get('#senha').type('Davi@859632'); // senha forte
    cy.get('#confirmarSenha').type('Davi@859632');
    cy.get('#submit').click();
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });

  it('  Deve exibir erro ao deixar campos obrigatórios vazios', () => {
    cy.get('#submit').click();                              // Campos vazios obrigatórios
    cy.contains('Campo obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao usar uma senha fraca', () => {
    cy.get('#senha').type('12345'); // senha fraca
    cy.get('#submit').click();
    cy.contains('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número').should('be.visible');
  });

  it('Deve exibir erro ao e-mails não coincidirem', () => {
    cy.get('#email').type('teste@email.com');
    cy.get('#confirmacaoEmail').type('outro.teste@email.com'); // e-mails divergentes
    cy.get('#submit').click();
    cy.contains('Os e-mails não coincidem').should('be.visible');
  });
});
