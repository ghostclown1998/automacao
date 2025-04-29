# Documentação Detalhada - Testes Automatizados ServeRest

## 1. Visão Geral do Projeto

Este projeto implementa testes automatizados para o ServeRest, uma API REST e frontend para estudo de automação de testes. Utilizamos o Cypress como ferramenta principal de teste devido à sua facilidade de uso e recursos avançados.

### 1.1 Escolha da Linguagem

O projeto foi desenvolvido em JavaScript, embora o TypeScript seja uma opção mais robusta para projetos de teste automatizado. Esta decisão foi tomada por dois motivos principais:

1. **Requisitos do Desafio**
   - O projeto foi desenvolvido como parte de um desafio que especificava o uso de JavaScript
   - Manter a consistência com os requisitos originais foi uma prioridade

2. **Benefícios do TypeScript (não implementados)**
   - Tipagem estática para maior segurança no código
   - Melhor autocompletar e sugestões de código
   - Detecção precoce de erros
   - Melhor manutenibilidade em projetos grandes

Caso o projeto evolua, uma migração para TypeScript seria recomendada pelos seguintes motivos:
- Maior robustez no desenvolvimento
- Melhor suporte a ferramentas de desenvolvimento
- Facilidade na manutenção do código
- Redução de erros em tempo de execução

## 2. Estrutura de Testes

### 2.1 Testes de API
Localização: `cypress/tests/api/`

#### 2.1.1 Testes de Login (`login.cy.js`)
- **Login com sucesso**
  - Objetivo: Validar o fluxo principal de autenticação
  - Motivo: Garantir que usuários válidos possam acessar o sistema
  - Cenários testados:
    - Envio de credenciais corretas
    - Recebimento do token JWT
    - Status code 200

- **Login com senha inválida**
  - Objetivo: Validar tratamento de erros
  - Motivo: Garantir segurança do sistema
  - Cenários testados:
    - Mensagem de erro apropriada
    - Status code 401

- **Login sem email**
  - Objetivo: Validar validações de campos obrigatórios
  - Motivo: Prevenir erros de validação no frontend
  - Cenários testados:
    - Mensagem de erro clara
    - Status code 400

#### 2.1.2 Testes de Registro (`register.cy.js`)
- **Registro com sucesso**
  - Objetivo: Validar criação de novos usuários
  - Motivo: Garantir funcionalidade principal do sistema
  - Cenários testados:
    - Criação de usuário
    - Retorno do ID do usuário
    - Status code 201

- **Registro com email duplicado**
  - Objetivo: Validar unicidade de emails
  - Motivo: Manter integridade dos dados
  - Cenários testados:
    - Mensagem de erro apropriada
    - Status code 400

### 2.2 Testes E2E
Localização: `cypress/tests/e2e/`

#### 2.2.1 Fluxo de Login
- **Login com sucesso**
  - Objetivo: Validar fluxo completo de autenticação
  - Motivo: Garantir experiência do usuário
  - Elementos testados:
    - Campos de input
    - Botão de submit
    - Redirecionamento após login

- **Validação de campos**
  - Objetivo: Validar feedback visual
  - Motivo: Melhorar usabilidade
  - Elementos testados:
    - Mensagens de erro
    - Estilização de campos inválidos

#### 2.2.2 Fluxo de Registro
- **Registro de novo usuário**
  - Objetivo: Validar processo completo de cadastro
  - Motivo: Garantir conversão de novos usuários
  - Elementos testados:
    - Formulário completo
    - Feedback de sucesso
    - Redirecionamento

## 3. Pipeline CI/CD

### 3.1 Configuração
Localização: `.github/workflows/cypress.yml`

### 3.2 Etapas da Pipeline

1. **Checkout do Código**
   - Objetivo: Obter código mais recente
   - Motivo: Garantir testes no código atual

2. **Setup do Node.js**
   - Objetivo: Configurar ambiente de execução
   - Motivo: Garantir consistência entre ambientes
   - Configurações:
     - Node.js 18
     - Cache de dependências

3. **Instalação de Dependências**
   - Objetivo: Instalar pacotes necessários
   - Motivo: Garantir todas as dependências
   - Comando: `npm ci`

4. **Execução dos Testes**
   - Objetivo: Rodar suite de testes
   - Motivo: Validar funcionalidades
   - Configurações:
     - Modo headless
     - Reporter Mochawesome

5. **Upload de Relatórios**
   - Objetivo: Disponibilizar resultados
   - Motivo: Facilitar análise de resultados
   - Configurações:
     - Retenção: 7 dias
     - Formato: HTML e JSON

### 3.3 Gatilhos da Pipeline
- Push para branch main
- Pull requests para main

## 4. Estratégia de Testes

### 4.1 Abordagem
- Testes de API para validar lógica de negócio
- Testes E2E para validar experiência do usuário
- Relatórios detalhados para análise

### 4.2 Boas Práticas Implementadas
- Page Objects para reutilização de código
- Dados de teste isolados
- Asserções claras e descritivas
- Tratamento adequado de erros

## 5. Manutenção e Evolução

### 5.1 Atualizações
- Manter dependências atualizadas
- Revisar e atualizar testes regularmente
- Adicionar novos cenários conforme necessário

### 5.2 Contribuição
- Seguir padrões estabelecidos
- Manter cobertura de testes
- Documentar novas funcionalidades 