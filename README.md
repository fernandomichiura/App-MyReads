# Aplicativo MyReads

MyReads é um aplicativo interativo baseado na biblioteca React que possibilita ao usuário a disposição de livros organizados em categorias: "Read", "Want to Read" e "Currently Reading", além de possuir um mecanismo de busca (API) que identifica outros livros disponíveis em uma base de dados remota, onde o usuário pode inserí-los em uma das categorias existentes.


## Instalação

Basicamente, este projeto possui duas dependências necessárias para o seu funcionamento: npm e react-router:

> Instalacão do NPM
```shell
$ npm install
```

> Instalacão do React Router
```shell
$ npm install --save react-router-dom
```

### Inicializar o serviço de desenvolvimento:
`npm start`


## Backend API

O aplicativo utiliza a API "BooksAPI", contendo funções para gerenciamento e manipulação dos registros disponíveis pela interface, disponibilizada pela plataforma online [`Udacity`](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js), com finalidade acadêmica.


## Termos de Busca

A BooksAPI determina uma série fixa de `termos` que podem ser utilizados para realizar as buscas, e uma série fixa de resultados. 
Todos os termos podem ser encontrados no arquivo disponível neste projeto, [`aqui`](/SEARCH_TERMS.md).
Considerando o limite de termos que podem ser pesquisados, é possível que termos informados não identificados na documentação tragam zero resultados.


## Clone

É possível clonar este projeto por meio deste link `https://github.com/fernandomichiura/App-MyReads`
