import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from "./BookShelf";

class MainPage extends Component {
    
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              caption='Currently Reading' 
              //shelfID='currentlyReading' 
              books={ this.props.books.filter((book) => {
                return book.shelf === 'currentlyReading'
              })}
              onMoveBook={this.props.onMoveBook}
            />
            <BookShelf 
              caption='Want to Read' 
              //shelfID='wantToRead' 
              books={ this.props.books.filter((book) => {
                return book.shelf === 'wantToRead'
              })}
              onMoveBook={this.props.onMoveBook}
            />
            <BookShelf 
              caption='Read' 
              //shelfID='read' 
              books={ this.props.books.filter((book) => {
                return book.shelf === 'read'
              })}
              onMoveBook={this.props.onMoveBook}
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
}

export default MainPage