# Testes Automatizados ServeRest

Este projeto contém testes automatizados para o frontend e API do ServeRest utilizando Cypress.

## Estrutura do Projeto

```
cypress/
|--tests/
|  |--api/
|  |  |--login.cy.js
|  |  |--register.cy.js
|  |--e2e/
|  |  |--login.cy.js
|  |  |--register.cy.js
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

Os relatórios dos testes são gerados automaticamente na pasta `cypress/reports` após a execução dos testes. Os relatórios incluem:
- Status de cada teste
- Screenshots em caso de falhas
- Tempo de execução
- Logs detalhados

## Testes Implementados

### API Tests
- Login com sucesso
- Login com senha inválida
- Login sem email
- Registro de usuário com sucesso
- Registro com email já cadastrado
- Registro com dados inválidos

### E2E Tests
- Login com sucesso
- Login com credenciais inválidas
- Validação de campos obrigatórios no login
- Registro de novo usuário
- Validação de campos obrigatórios no registro
- Mensagens de erro no registro

## Pipeline CI/CD

O projeto inclui uma pipeline de CI/CD configurada no GitHub Actions que:
1. Executa os testes automaticamente em cada push
2. Gera relatórios detalhados dos testes
3. Disponibiliza os relatórios como artefatos do workflow

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request 