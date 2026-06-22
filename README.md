<div align="center">

# 📚 Library API

**API REST simples para gerenciar o acervo de uma pequena biblioteca**

![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-4.x-000000?logo=fastify)
![SQLite](https://img.shields.io/badge/SQLite-via%20Sequelize-003B57?logo=sqlite)
![License](https://img.shields.io/badge/License-ISC-blue)

</div>

---

## Visão Geral

**Library API** é uma API REST construída com Fastify e Sequelize (SQLite) para cadastrar, consultar, atualizar e remover livros de uma biblioteca. Possui um comportamento inteligente no cadastro: ao tentar inserir um livro com título já existente, o sistema incrementa o contador (`count`) em vez de criar um registro duplicado.

---

## Stack

| Camada         | Tecnologia                  |
| -------------- | --------------------------- |
| Runtime        | Node.js v18+ (ES Modules)   |
| Servidor HTTP  | Fastify + @fastify/formbody |
| ORM            | Sequelize                   |
| Banco de dados | SQLite                      |

---

## Estrutura do Projeto

```
├── 📁 src
│   ├── 📁 db
│   │   ├── 📄 config.js
│   │   └── 📄 database.sqlite
│   ├── 📁 models
│   │   └── 📄 book.js
│   ├── 📁 routes
│   │   ├── 📄 booksRouter.js
│   │   └── 📄 index.js
│   └── 📄 index.js
├── ⚙️ .env.example
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```

---

## Instalação

**Pré-requisito:** Node.js v18+

```bash
# 1. Clone o repositório
git clone https://github.com/victor-hugo-ss/library_api.git
cd library-api

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
```

---

## Variáveis de Ambiente

| Variável | Descrição                    | Padrão |
| -------- | ---------------------------- | ------ |
| `PORT`   | Porta onde o servidor escuta | `3000` |

---

## Execução

```bash
npm run dev   # Desenvolvimento com recarregamento automático
npm start     # Produção
```

O banco de dados SQLite é criado automaticamente em `src/db/database.sqlite` via `Book.sync()` na primeira execução.

---

## Endpoints

Base URL: `/api/books`

---

### `GET /api/books/:id`

Retorna um livro pelo ID.

**Resposta:** objeto do livro ou `null` (status `200`)

```bash
curl http://localhost:3000/api/books/1
```

---

### `POST /api/books`

Cadastra um novo livro. Se já existir um livro com o mesmo `title`, incrementa o campo `count` e retorna o registro atualizado.

**Body:** `application/x-www-form-urlencoded` ou `application/json`

| Campo    | Tipo   | Obrigatório |
| -------- | ------ | ----------- |
| `title`  | string | ✅ Sim      |
| `author` | string | ❌ Não      |

**Resposta:** objeto do livro criado ou atualizado (status `200`)

```bash
curl -X POST http://localhost:3000/api/books \
  -d "title=O Alquimista&author=Paulo Coelho"
```

---

### `PUT /api/books/:id`

Atualiza os campos `title` e/ou `author` de um livro existente.

**Body:** `application/json`

```bash
curl -X PUT http://localhost:3000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Novo Título","author":"Novo Autor"}'
```

---

### `DELETE /api/books/:id`

Remove um livro pelo ID.

**Resposta:** número de registros removidos (`0` ou `1`)

```bash
curl -X DELETE http://localhost:3000/api/books/1
```

---

## Testando com Postman

1. Crie uma nova requisição e defina o método e a URL desejados.
2. **POST/PUT:** em _Body_, escolha `x-www-form-urlencoded` para POST ou `raw > JSON` para PUT.
3. **GET/DELETE:** apenas defina o método e a URL com o `:id` correspondente.
4. Salve as requisições em uma **Collection** para reuso e testes rápidos.

> 💡 Use a aba _Console_ do Postman para inspecionar detalhes de requisições e respostas durante o debug.

---

## Contribuindo

Fork o repositório e abra um pull request. Após alterações, valide manualmente os endpoints com `curl` ou Postman antes de submeter.

---

## Autor

**Victor Hugo**

---

## Licença

Distribuído sob a licença **ISC**. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  Feito com ☕ e Node.js · <strong>Library API</strong>
</div>
