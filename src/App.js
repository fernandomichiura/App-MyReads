import React, { Component } from 'react'
import './App.css'
import BooksList from './BooksList.js'
import BookAction from './BookAction.js'
import BookShelfList from './BookShelfList.js'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    booksLibrary: [],
    books: [],
  }

  /**
    * @description - Search the books using with the BooksAPI
    * @param {string} event - Search query from input
    * @setState {array} booksLibrary - Sets the booksLibrary state
  */
  searchBook = (event) => {
    BooksAPI.search(event.target.value)
      .then((booksLibrary) => {
        if(booksLibrary.error) {
          this.setState(() => ({
            booksLibrary: []
          }))
        } else {
          this.setState(() => ({
            booksLibrary: booksLibrary
          }))
        console.log(booksLibrary);

        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  /**
    * @description - Updates the book's placement in the bookshelf
    * @param {array} book - Book's info
    * @param {event} event - Event holding the shelf info
    * @setState {array} books - Get all books to update the Bookshelf
  */
  // updateBook = (book, event) => {
  //   const shelf = event.target.value;

  //   BooksAPI.update(book, shelf)
  //     .then(() => {
  //       BooksAPI.getAll()
  //         .then((books) => {
  //           this.setState(() => ({
  //             books: books
  //           }))
  //         })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  updateBook = (book, shelf) => {
    // O update do livro é assíncrono
    BooksAPI.update(book, shelf.target.value);
    // Seto a estante atual
    book.shelf = shelf;  

    // 1. Uso o estado atual
    // 2. Removo o livro caso ele exista
    // 3.  Caso o livro não exista ele vai retornar todos os livros
    // 4. Adiciono o livro novamente com o `concat`, sem realizar nenhuma mutação
    this.setState(state => {
      books: state.books.filter(b => b.id === book.id).concat([ book ])
    })
}

  /**
    * @description - Initialize the bookshelf within data from the BooksAPI
    * @setState {array} books - Get all books to update the Bookshelf
  */
  // componentDidMount() {
  //   BooksAPI.getAll()
  //     .then((books) => {
  //       this.setState(() => ({
  //         books: books
  //       }))
  //     })
  // }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  render() {
    return (
      <div className='app'>

        <Route exact path='/' render={({ history }) => 
          (
            <div className='list-books'>
              <div className='list-books-title'>
                <h1>MyReads</h1>
              </div>

              <BooksList books={this.state.books} updateBook={this.updateBook} />
              
              <div className='open-search'>
                <Link to='/search' className='button-search'>Add Contact</Link>
              </div>
            </div>
          )} 
        />

        <Route path='/search' render={() => 
          (
            <div className='search-books'>
              <div className='search-books-bar'>
                <Link to='/' className='close-search'>Close</Link>
                <div className='search-books-input-wrapper'>
                  <input 
                    type='text' 
                    placeholder='Search by title or author'
                    onChange={this.searchBook}
                  />
                </div>
              </div>
              <div className='search-books-results'>
                <BookShelfList books={this.state.booksLibrary} updateBook={this.updateBook} shelfCategory="allBooks" />
              </div>
            </div>
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
