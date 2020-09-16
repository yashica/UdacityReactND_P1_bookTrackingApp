import React from 'react'
import BooksGrid from "./BooksGrid";

const BookShelf = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ props.caption }</h2>
            <div className="bookshelf-books">
                <BooksGrid 
                    books={ props.books }
                    onMoveBook={ props.onMoveBook } 
                />
            </div>
        </div>
    )
}

export default BookShelf