Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(password);
  cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('apiLogin', (email, password, options = {}) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('API_URL')}/login`,
    body: {
      email: email,
      password: password
    },
    failOnStatusCode: options.failOnStatusCode || false
  });
});

Cypress.Commands.add('validateToastMessage', (message) => {
  cy.get('.toast-message', { timeout: 10000 })
    .should('be.visible')
    .and('contain', message);
});

Cypress.Commands.add('validateFieldError', (field) => {
  cy.get(`[data-testid="${field}"]`)
    .should('have.class', 'form-control')
    .and('have.class', 'is-invalid');
});

Cypress.Commands.add('cadastrarUsuario', (usuario) => {
  cy.get('[data-testid="nome"]').type(usuario.nome);
  cy.get('[data-testid="email"]').type(usuario.email);
  cy.get('[data-testid="password"]').type(usuario.password);
  cy.get('[data-testid="checkbox"]').check();
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('apiCadastrarUsuario', (usuario, options = {}) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('API_URL')}/usuarios`,
    body: usuario,
    failOnStatusCode: options.failOnStatusCode || false
  });
}); 