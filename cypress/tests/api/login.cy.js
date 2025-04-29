describe("API Login Tests", () => {
  beforeEach(() => {
    cy.log("Iniciando testes de API de login");
  });

  afterEach(() => {
    cy.log("Finalizando teste de API de login");
  });

  it("Deve fazer login com sucesso", () => {
    const usuario = {
      nome: "Usuário Teste",
      email: `teste${Date.now()}@qa.com`,
      password: "teste123",
      administrador: "true",
    };

    cy.apiCadastrarUsuario(usuario).then(() => {
      cy.apiLogin(usuario.email, usuario.password).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property(
          "message",
          "Login realizado com sucesso"
        );
        expect(response.body).to.have.property("authorization");
        expect(response.body.authorization).to.be.a("string").and.not.be.empty;
      });
    });
  });

  it("Deve retornar erro ao tentar login com senha inválida", () => {
    cy.apiLogin(Cypress.env("ADMIN_EMAIL"), Cypress.env("INVALID_PASSWORD"), {
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property(
        "message",
        "Email e/ou senha inválidos"
      );
    });
  });

  it("Deve retornar erro ao tentar login sem email", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("API_URL")}/login`,
      body: {
        password: Cypress.env("ADMIN_PASSWORD"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("email", "email é obrigatório");
    });
  });
});
