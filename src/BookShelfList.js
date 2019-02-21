import React from 'react'
import BookAction from './BookAction.js'

/**
  * @description List all the books 
  * @constructor
  * @param {Object} props.books - All the books saved in the state (books)
  * @param {function} props.updateBook - Updates the bookshelf and App state (books)
  * @param {string} props.shelfCategory - Determines the category os books to list
*/
function BooksShelfList(props) {
	return (
		<ol className='books-grid'>
			{ props.books.map(book => {
        if(book.shelf === props.shelfCategory || props.shelfCategory === "allBooks") {
          return(
            <li key={book.id}>
              <div className='book'>
                 <div className='book-top'>
                  	<div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url( ${book.imageLinks ? book.imageLinks.thumbnail : '' } )` }}></div>
                  	<div className='book-shelf-changer'>
                  	 	<BookAction book={book} updateBook={props.updateBook} shelfCategory={props.shelfCategory} />
                  	</div>
                	</div>
                	
                	<div className='book-title'>{book.title}</div>
                	<div className='book-authors'>{book.authors ? book.authors.join(', ') : book.authors}</div>
              </div>
            </li>
          )
        }
      })}
    </ol>
	);
}

export default BooksShelfList;