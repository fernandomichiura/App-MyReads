import React from 'react'

/**
	* @description Represents the Action button for each book 
	* @constructor
	* @param {Object} props.books - All the books saved in the App state (books)
	* @param {function} props.updateBook - Updates the bookshelf and App state (books)
	* @param {string} props.shelfCategory - Set defaultValue accordingly to the category
*/
function BookAction(props) {
	return (
		<select defaultValue={props.shelfCategory === 'allBooks' ? 'none' : props.book.shelf} onChange={props.updateBook.bind(null, props.book)}>
        <option value='move' disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
	);
}

export default BookAction;