# Testes Automatizados ServeRest

Este projeto contém testes automatizados para o frontend e API do ServeRest utilizando Cypress.

## Estrutura do Projeto

```
cypress/
|--tests/
|  |--api/
|  |  |--login.cy.js
|  |--e2e/
|  |  |--login.cy.js
```

## Requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

## Executando os Testes

Para executar os testes em modo interativo:
```bash
npm run cypress:open
```

Para executar os testes em modo headless:
```bash
npm test
```

## Relatórios

Os relatórios dos testes são gerados automaticamente na pasta `cypress/reports` após a execução dos testes.

## Testes Implementados

### API Tests
- Login com sucesso
- Login com senha inválida
- Login sem email

### E2E Tests
- Login com sucesso
- Login com credenciais inválidas
- Validação de campos obrigatórios 