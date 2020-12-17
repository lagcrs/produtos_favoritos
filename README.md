# Lista de Produtos Favoritos API

API desenvolvida para o desafio Magalu/Luizalabs. O objetivo é criar um API Rest que gerencia a Lista de Produtos Favoritos dos clientes do Magazine Luiza, sendo crucial para as ações de marketing da empresa.
Nesta API, você pode criar, atualizar, visualizar e remover clientes fornecendo apenas o `name`, `email` e `password` para autenticação. Todos os clientes possuem uma lista de produtos favoritos que pode ser vazia, contudo não pode exister produtos repetidos ou que não existam.

Todos os campos são `string` e as requisições/respostas HTTP são em JSON.

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
- Registro do cliente: `/api/customer/signup` (POST)
- Login do cliente: `/api/customer/login` (POST)

**Rotas do CRUD Cliente:**
- Visualizar: `/api/customer/:customerId` (GET)
- Atualizar: `/api/customer/:customerId` (PUT)
- Excluir: `/api/customer/:customerId` (DELETE)

> Detalhe: `:customerID` é o `id` do cliente.

**Rotas da Lista de Produtos Favoritos:**
- Visualizar: `/api/customer/favorites/` (GET)
- Adicionar: `/api/customer/favorites/:productId` (POST)

> Detalhe: `:productId` é o `id` do produto da API do Luizalabs fornecida para este desafio.

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
> Foi utilizado o MongoDB Atlas para a criação do banco de dados, então para fins de testes da API não é necessário configurar o banco de dados (o mesmo está na nuvem).

- Não esqueça que precisa fazer login para utilizar a API! Então cadastra um usuário, faça o login para que as rotas sejam liberadas para você.
- Caso queira utilizar as informações geradas no `.env.example`, apenas copie e cole em um arquivo `.env`. Não é uma boa prática, mas é para fins de testes da API.

## Contato

Qualquer dúvida por favor entrar em contato comigo.
- Email: <larissa.gcrs@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/lagcrs/>
