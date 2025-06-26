
# 🧪 API de Tarefas - Testes Automatizados

Este projeto implementa uma API RESTful para gerenciamento de tarefas utilizando Node.js, Express e MongoDB. Os testes automatizados são feitos com **Jest** e **Supertest**.

---

## ✅ Cobertura de Testes

| Métrica         | Cobertura Total |
|-----------------|------------------|
| Statements      | 91.30% (84/92)   |
| Branches        | 83.33% (10/12)   |
| Functions       | 76.92% (10/13)   |
| Lines           | 91.01% (81/89)   |

### 📂 Detalhamento por Arquivo

| Arquivo            | Statements | Branches | Functions | Lines   |
|--------------------|------------|----------|-----------|---------|
| `API/index.js`     | 87.5%      | 87.5%    | 33.33%    | 87.5%   |
| `API/controller`   | 92.3%      | 90%      | 100%      | 91.83%  |
| `API/dbTest`       | 50%        | 100%     | 0%        | 50%     |
| `API/model`        | 83.33%     | 50%      | 100%      | 83.33%  |
| `API/routes`       | 100%       | 100%     | 100%      | 100%    |

> ⚠️ A cobertura do arquivo `dbTest.js` está baixa porque contém funções auxiliares para simular erros de banco de dados e ainda não foram incluídos testes específicos com mocks para isso.

---

## 🚀 Como Executar os Testes

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes com cobertura:

   ```bash
   npm test -- --coverage
   ```

3. Para visualizar o relatório em HTML:

   * Abra: `coverage/lcov-report/index.html` em seu navegador.

---

## 🧰 Tecnologias

* Node.js
* Express
* MongoDB + Mongoose
* Jest
* Supertest

---

## 📌 Observações

* A maior parte da lógica principal da aplicação está completamente coberta por testes.
* Futuramente, você pode melhorar ainda mais a cobertura testando cenários com erros simulados utilizando **mocks do Mongoose**.

---

## 📎 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

```

---

Se quiser, posso personalizar esse README com o nome do seu projeto, autor, ou adicionar instruções específicas sobre como subir o servidor ou configurar o MongoDB. É só me falar!
