import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from "./BooksGrid";

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books: books
      }))
      console.log(books);
    })
  }

  updateQuery = (e) => {
    e.preventDefault();
    const query = e.target.value;
    this.setState((prevState) => ({
      query: query
    }))
    this.updateBooks(query);
  }

  updateBooks = (query) => {
    console.log('In update books')
    if(query==='')
    { //if query string is empty, don't show any books
      this.setState((prevState) => ({
        books: []
      }))
        /* 
        //if query string is empty, show all books (like in the beginning)
        BooksAPI.getAll().then((books_all) => {
        this.setState((prevState) => ({
          books: books_all
        }))
        console.log(this.state.books);
      }) */
    } else {
      //update books based on query
      BooksAPI.search(query).then((books_found) => {
        if( books_found && books_found.length > 0 ){

          this.correctShelfs(books_found);

          this.setState((prevState) => ({
            books: books_found
          }))
        }
        else {
          this.setState((prevState) => ({
            books: []
          }))
        }
        console.log("Books after search" + this.state.books);
      })
    }
  }

  moveBook = (book, shelf_to) => {
    this.props.onMoveBook(book, shelf_to);
    this.updateBooks(this.state.query);
  }

  correctShelfs = (foundBooks) => {
    foundBooks.map((foundBook) =>
      {
        const bookWithSameID = this.props.books.find(ownedBook => ownedBook.id === foundBook.id);
        return foundBook.shelf = bookWithSameID ? bookWithSameID.shelf : 'none'
      }  
    )
  }

  render() {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {
              JSON.stringify(this.state.query)
              //NOTES: The search from BooksAPI is limited to a particular set of search terms.
              //You can find these search terms here:
              //https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              //However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              //you don't find a specific author or title. Every search is limited by search terms.
            }
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event)} 
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length <= 0
            ? <div>
                <br />
                No Books Found
              </div>
            : <BooksGrid 
                books={ this.state.books }
                onMoveBook={ this.moveBook } 
              />
          }
        </div>
      </div>
    );
  }
}

export default SearchPage