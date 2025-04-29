describe("API Cadastro de Usuário", () => {
  const usuario = {
    nome: "Usuário Teste",
    email: `teste${Date.now()}@qa.com`,
    password: "teste123",
    administrador: "true",
  };

  beforeEach(() => {
    cy.log("Iniciando testes de cadastro de usuário");
  });

  afterEach(() => {
    cy.log("Finalizando teste de cadastro de usuário");
  });

  it("Deve cadastrar um novo usuário com sucesso", () => {
    cy.apiCadastrarUsuario(usuario).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );
      expect(response.body).to.have.property("_id");
      cy.wrap(usuario).as("usuarioCriado");
    });
  });

  it("Deve retornar erro ao tentar cadastrar usuário com email já existente", () => {
    cy.apiCadastrarUsuario(usuario);

    cy.apiCadastrarUsuario(usuario, { failOnStatusCode: false }).then(
      (response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property(
          "message",
          "Este email já está sendo usado"
        );
      }
    );
  });

  it("Deve validar campos obrigatórios no cadastro", () => {
    cy.apiCadastrarUsuario({}, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("nome", "nome é obrigatório");
      expect(response.body).to.have.property("email", "email é obrigatório");
      expect(response.body).to.have.property(
        "password",
        "password é obrigatório"
      );
    });
  });
});
