import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from "./BookShelf";

const MainPage = props => {
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              caption='Currently Reading' 
              books={ props.books.filter((book) => {
                return book.shelf === 'currentlyReading'
              })}
              onMoveBook={ props.onMoveBook }
            />
            <BookShelf 
              caption='Want to Read' 
              books={ props.books.filter((book) => {
                return book.shelf === 'wantToRead'
              })}
              onMoveBook={ props.onMoveBook }
            />
            <BookShelf 
              caption='Read' 
              books={ props.books.filter((book) => {
                return book.shelf === 'read'
              })}
              onMoveBook={ props.onMoveBook }
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
}

export default MainPage