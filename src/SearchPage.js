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
    const query = e.target.value.trim();
    this.setState((prevState) => ({
      query: query
    }))
    this.updateBooks(query);
  }

  updateBooks = (query) => {
    console.log('In update books')
    if(query===''){ //if query string is empty, show all available books
        BooksAPI.getAll().then((books_all) => {
        this.setState((prevState) => ({
          books: books_all
        }))
        console.log(this.state.books);
      })
    } else {
      //update books based on query
      BooksAPI.search(query).then((books_found) => {
        if( books_found && books_found.length > 0 ){
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
          <BooksGrid 
            books={ this.state.books }
            onMoveBook={ this.props.onMoveBook } 
            />
        </div>
      </div>
    );
  }
}

export default SearchPage