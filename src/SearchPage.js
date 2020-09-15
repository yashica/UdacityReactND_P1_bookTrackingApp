import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from "./BooksGrid";

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))

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

  moveBookToShelf = (book, shelf_from, shelf_to) => {
    this.setState((currentState) => ({
      books: currentState.books.filter((b) => {
        return b.title !== book.title
      })
    }))
    this.props.onMoveBook(book, shelf_from, shelf_to)
    return 0;
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
                onChange={(event) => this.updateQuery(event.target.value)} 
              />
            </div>
          </div>
          <div className="search-books-results">
            <BooksGrid 
              shelf={ "none" } 
              books={ this.state.books }
              onMoveBook={ this.moveBookToShelf } 
              />
          </div>
        </div>
      );
  }
}

export default SearchPage