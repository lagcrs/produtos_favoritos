# Lista de Produtos Favoritos API

API desenvolvida para o desafio Magalu/Luizalabs. O objetivo é criar um API Rest que gerencia a Lista de Produtos Favoritos dos clientes do Magazine Luiza, sendo crucial para as ações de marketing da empresa.
Nesta API, você pode criar, atualizar, visualizar e remover clientes fornecendo apenas o nome, email e senha para autenticação. Todos os clientes possuem uma lista de produtos favoritos que pode ser vazia, contudo não pode exister produtos repetidos ou que não existam.

## Tecnologias Utilizadas

Para o desenvolvimento desta aplicação API Rest foi utilizado o NodeJS (JavaScript) com o banco de dados NoSQL MongoDB.

### Depedências
- [Axios](https://github.com/axios/axios)
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Cors](https://github.com/expressjs/cors)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Express](http://expressjs.com/)
- [JWT](https://jwt.io/)
- [Mongoose](https://mongoosejs.com/)

Pré-requisitos: ter o `npm > 6.14.5` e `node > v14.5.0` instalado na máquina. 

## Endpoints 

**Rotas de Autenticação:**
- Registro do cliente: `/api/customer/signup`
- Login do cliente: `/api/customer/login`

**Rotas do CRUD Cliente:**
- Visualizar: `/api/customer/:customerId`
- Atualizar: `/api/customer/:customerId`
- Excluir: `/api/customer/:customerId`

> Detalhe: `:customerID` é o `id` do cliente.

**Rotas da Lista de Produtos Favoritos:**
- Visualizar: `/api/customer/favorites/`
- Adicionar: `/api/customer/favorites/:productId`

> Detalhe: `:productId` é o `id` do produto da API do Luizalabs.

## Rodando o Projeto

Segue abaixo os passos necessários para rodar esta aplicação:

```bash
# Clone este repositório
$ git clone https://github.com/lagcrs/produtos_favoritos.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd produtos_favoritos

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333 (recomendo acessar pelo Insomnia ou Postman)
```
> Foi utilizado o MongoDB Atlas para a criação do banco de dados, então para fins de testes da API não é necessário configurar o banco de dados.

*Não esqueça que precisa fazer login para utilizar a API! Então cadastra um usuário, faça o login para que as rotas sejam liberadas para você.*

## Contato

Qualquer dúvida por favor entrar em contato comigo.
- Email: <larissa.gcrs@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/lagcrs/>
