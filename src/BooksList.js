import React from 'react'
import BookShelfList from './BookShelfList.js'

/**
	* @description Represents the bookshelves
	* @constructor
	* @param {Object} props.books - All the books saved in the state (books)
	* @param {function} props.updateBook - Updates the bookshelf and state (books)
*/
function BooksList(props) {
	return (
		<div className='list-books-content'>
        	<div>
          	<div className='bookshelf'>
            	<h2 className='bookshelf-title'>Currently Reading</h2>
            	<div className='bookshelf-books'>                 
           	  		<BookShelfList books={props.books} updateBook={props.updateBook} shelfCategory="currentlyReading" />
            	</div>
          	</div>
       		<div className='bookshelf'>
	            <h2 className='bookshelf-title'>Want to Read</h2>
	            <div className='bookshelf-books'>
	              	<BookShelfList books={props.books} updateBook={props.updateBook} shelfCategory="wantToRead" />
	            </div>
          	</div>
				<div className='bookshelf'>
					<h2 className='bookshelf-title'>Read</h2>
					<div className='bookshelf-books'>
					  	<BookShelfList books={props.books} updateBook={props.updateBook} shelfCategory="read" />
					</div>
				</div>
         </div>
      </div>
	);
}

export default BooksList;