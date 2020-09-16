import React from 'react'
import Book from './Book'

const BooksGrid = props => {
    return (
        <ol className="books-grid">
            {
                props.books.map((book) => (
                    <li key={book.id}>
                        <Book 
                            bookData={ book }
                            onMoveBook={ props.onMoveBook }
                        />
                    </li>
                ))
            }
        </ol>
    );
}

export default BooksGrid