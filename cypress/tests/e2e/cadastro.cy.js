describe("Cadastro de Usuário E2E", () => {
  const usuario = {
    nome: "Usuário Teste",
    email: `teste${Date.now()}@qa.com`,
    password: "teste123",
  };

  beforeEach(() => {
    cy.log("Iniciando testes E2E de cadastro");
    cy.visit("/cadastrarusuarios");
  });

  afterEach(() => {
    cy.log("Finalizando teste E2E de cadastro");
  });

  it("Deve cadastrar um novo usuário com sucesso", () => {
    cy.cadastrarUsuario(usuario);
    //devemos saber a hora de ultilizar o cy.wait para não causar um erro de timeout mas no caso o get ele ta um pouco lento então adicionei para pode validar no corpo da requisição se o usuário foi cadastrado com sucesso
    cy.wait(1000);
    cy.url().should("include", "/admin/home");
    cy.get('[data-testid="logout"]').should("be.visible");
  });

  it("Deve mostrar erro ao tentar cadastrar com email já existente", () => {
    cy.cadastrarUsuario(usuario);
    cy.visit("/cadastrarusuarios");
    cy.cadastrarUsuario(usuario);
    cy.url().should("include", "/cadastrarusuarios");
    cy.get('[data-testid="cadastrar"]').should("be.visible");
  });

  it("Deve validar campos obrigatórios no cadastro", () => {
    cy.get('[data-testid="cadastrar"]').click();
    cy.url().should("include", "/cadastrarusuarios");
    cy.get('[data-testid="cadastrar"]').should("be.visible");
    cy.get('[data-testid="checkbox"]').should("not.be.checked");
  });

  it("Deve validar formato de email inválido", () => {
    const usuarioInvalido = {
      ...usuario,
      email: "emailinvalido",
    };

    cy.cadastrarUsuario(usuarioInvalido);
    cy.url().should("include", "/cadastrarusuarios");
    cy.get('[data-testid="cadastrar"]').should("be.visible");
  });
});
