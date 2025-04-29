describe("Login E2E Tests", () => {
  beforeEach(() => {
    cy.log("Iniciando testes E2E de login");
    cy.visit("/login");
  });

  afterEach(() => {
    cy.log("Finalizando teste E2E de login");
  });

  it("Deve fazer login com sucesso", () => {
    const usuario = {
      nome: "Usuário Teste",
      email: `teste${Date.now()}@qa.com`,
      password: "teste123",
      administrador: "true",
    };
    
    cy.apiCadastrarUsuario(usuario).then(() => {
      cy.login(usuario.email, usuario.password);

      cy.url().should("include", "/admin/home");
      cy.get('[data-testid="logout"]').should("be.visible");
    });
  });

  it("Deve mostrar erro com credenciais inválidas", () => {
    cy.login("email@invalido.com", "senhaerrada");
    cy.url().should("include", "/login");
    cy.get('[data-testid="entrar"]').should("be.visible");
  });

  it("Deve mostrar erro ao tentar login sem preencher campos", () => {
    cy.get('[data-testid="entrar"]').click();
    cy.url().should("include", "/login");
    cy.get('[data-testid="entrar"]').should("be.visible");
  });

  it("Deve validar formato de email inválido", () => {
    cy.get('[data-testid="email"]').type("emailinvalido");
    cy.get('[data-testid="entrar"]').click();
    cy.url().should("include", "/login");
    cy.get('[data-testid="entrar"]').should("be.visible");
  });
});
