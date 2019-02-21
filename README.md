# Aplicativo MyReads

MyReads é um aplicativo interativo baseado na biblioteca React que possibilita ao usuário a disposição de livros organizados em categorias: "Read", "Want to Read" e "Currently Reading", além de possuir um mecanismo de busca (API) que identifica outros livros disponíveis em uma base de dados remota, onde o usuário pode inserí-los em uma das categorias existentes.


## Instalação

Basicamente, este projeto possui duas dependências necessárias para o seu funcionamento: npm e react-router:

* NPM - `$ npm install`
* React Router - `$ npm install --save react-router-dom`

### Inicializar o serviço de desenvolvimento:
`npm start`


## Backend API

O aplicativo utiliza a API "BooksAPI", contendo funções para gerenciamento e manipulação dos registros disponíveis pela interface, disponibilizada pela plataforma online [`Udacity`](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js), com finalidade acadêmica.


## Termos de Busca

A BooksAPI determina uma série fixa de `termos` que podem ser utilizados para realizar as buscas, e uma série fixa de resultados. 
Todos os termos podem ser encontrados na documentação da BooksAPI, [`aqui`](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md).
Considerando o limite de termos que podem ser pesquisados, é possível que termos informados não identificados na documentação tragam zero resultados.



## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookAction.js 
    ├── BookShelfList.js 
    ├── BooksList.js 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
