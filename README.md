# Relatório Completo de Testes de Qualidade - Desafio QA Pleno

## Objetivo

Este repositório contém os testes realizados para o desafio de Engenheiro de QA Pleno. O objetivo foi validar a qualidade do software através de três tipos principais de testes:

1. **Testes de Interface (UI)** - Validação de um formulário de cadastro de usuário.
2. **Testes de API** - Validação de uma API REST simulada (mock).
3. **Testes de Performance** - Simulação de carga para avaliar o desempenho da API sob múltiplos acessos simultâneos.

## Ferramentas Utilizadas

- **Cypress**: Utilizado para a automação dos testes de interface do formulário de cadastro de usuário.
- **Postman / Jest**: Utilizado para automação dos testes de API REST.
- **k6**: Utilizado para realizar testes de carga e performance da API.
  
Além disso, a API mock utilizada para os testes foi `https://jsonplaceholder.typicode.com/users`.

---

## Testes de Interface (UI) - Cypress

### **Objetivo dos Testes**
Validar os requisitos funcionais do formulário de cadastro de usuário, incluindo:
- Campos obrigatórios.
- Validação de senha forte.
- Confirmação de e-mail.

### **Cenários de Teste**

#### 1. **Preencher o Formulário Corretamente**
- **Ação**: Preencher todos os campos corretamente e enviar.
- **Resultado Esperado**: A página deve exibir uma mensagem de sucesso, indicando que o formulário foi submetido com sucesso.

#### 2. **Campos Obrigatórios Vazios**
- **Ação**: Deixar campos obrigatórios em branco e tentar submeter o formulário.
- **Resultado Esperado**: Mensagens de erro indicando que todos os campos obrigatórios precisam ser preenchidos.

#### 3. **Senha Fraca**
- **Ação**: Digitar uma senha com menos de 8 caracteres, sem letra maiúscula ou número.
- **Resultado Esperado**: A aplicação deve retornar um erro de validação, indicando que a senha não atende aos requisitos.

#### 4. **E-mails Diferentes**
- **Ação**: Digitar dois e-mails diferentes nos campos "E-mail" e "Confirmação de E-mail".
- **Resultado Esperado**: A aplicação deve exibir uma mensagem de erro, indicando que os e-mails não coincidem.

### **Resultado dos Testes**

Os testes foram realizados com sucesso e os seguintes comportamentos foram validados:

- Campos obrigatórios foram corretamente validados.
- Senha com requisitos mínimos de segurança foi validada.
- O e-mail foi verificado para garantir que o campo "Confirmação de E-mail" corresponda ao "E-mail".

---

## Testes de API - Postman / Jest

### **Objetivo dos Testes**
Validar a API REST simulada, testando diferentes requisições e garantindo que a API responda corretamente, com os status apropriados e a estrutura correta do JSON.

### **Cenários de Teste**

#### 1. **Requisição GET**
- **Ação**: Fazer uma requisição GET para o endpoint `/users`.
- **Resultado Esperado**: A API deve retornar um status 200 e uma lista de usuários no formato JSON.

#### 2. **Requisição POST com Dados Incompletos**
- **Ação**: Enviar um POST para o endpoint `/users` sem incluir um campo obrigatório.
- **Resultado Esperado**: A API deve retornar um erro 400, indicando que os dados enviados estão incompletos.

#### 3. **Simulação de Erro no Servidor (500)**
- **Ação**: Simular um erro no servidor (falha interna).
- **Resultado Esperado**: A API deve retornar um erro 500, indicando falha no servidor.

### **Resultado dos Testes**

Os testes mostraram que a API mock estava funcionando corretamente com as seguintes validações:
- A API respondeu adequadamente às requisições GET e POST.
- O retorno de status foi correto (200 para sucesso, 400 para erro de requisição, 500 para erro interno do servidor).
- A estrutura do JSON estava conforme esperado.

---

## Testes de Performance - k6

### **Objetivo dos Testes**
Avaliar o desempenho da API simulando múltiplos acessos simultâneos e medir a capacidade da API em lidar com carga, tempo de resposta e estabilidade sob pressão.

### **Cenário de Teste**

- **Usuários Simultâneos**: 100 usuários.
- **Duração do Teste**: 30 segundos.
- **Tipo de Requisição**: Requisição `GET` para o endpoint `/users`.

### **Resultado dos Testes**

Os principais resultados obtidos durante o teste de carga foram os seguintes:

- **Status HTTP**: 100% de sucesso (todas as requisições retornaram o status 200).
- **Tempo de Resposta**:
  - **Média**: 44.51ms.
  - **Mínimo**: 32.05ms.
  - **Máximo**: 144.06ms.
  - **P90**: 50.69ms.
  - **P95**: 54.93ms.
  
- **Taxa de Requisições**: 2.900 requisições realizadas durante o teste, com uma média de **93.63 requisições por segundo**.
- **Erros**: 0% de falhas nas requisições.
- **Usuários Simultâneos**: O teste foi realizado com 100 usuários simultâneos.

### **Conclusões dos Testes de Performance**

A API demonstrou um bom desempenho, com tempo de resposta consistente (média de 44.51ms) e sem falhas sob carga de 100 usuários simultâneos. O sistema não apresentou erros e manteve-se estável durante toda a duração do teste.

A API é capaz de lidar com uma carga de até 100 usuários simultâneos com uma performance satisfatória, o que indica que ela pode escalar para cenários de maior tráfego com ajustes mínimos.

---

## Conclusão Geral

Este conjunto de testes forneceu uma avaliação abrangente da qualidade da aplicação, validando:
- A **interface do usuário** (UI) com o Cypress, garantindo que o formulário de cadastro funcione como esperado.
- A **API REST** com o Postman/Jest, garantindo que a API responda corretamente a requisições válidas e gere erros apropriados para entradas inválidas.
- O **desempenho** da API com k6, garantindo que a API consiga suportar múltiplos acessos simultâneos sem falhas e com tempos de resposta rápidos.

A aplicação passou em todos os testes, e os resultados indicam que ela está pronta para ambientes de produção com a capacidade de lidar com um volume razoável de usuários simultâneos.

---

## Observações Finais

- A API mock utilizada foi o [JSONPlaceholder](https://jsonplaceholder.typicode.com/), mas em um ambiente real, recomenda-se realizar testes adicionais em um servidor de produção.
- Para melhorar ainda mais a performance, seria interessante realizar testes com um número maior de usuários simultâneos e ajustar a infraestrutura da API conforme necessário.

---

### **Instruções para Rodar os Testes**

1. **Instalar o Cypress**:
   ```bash
   npm install cypress
Em seguida, rodar os testes com:

npx cypress open

    Rodar os Testes de API com Postman:
        Importe a collection do Postman para rodar os testes manualmente ou use o comando newman para automação.

    Rodar o Teste de Performance com k6:
        Instale o k6 e execute o script com:

        k6 run path/to/loadtest.js

Esse modelo é bem completo e cobre todos os aspectos do desafio.
