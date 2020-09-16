import React, { Component }  from "react";
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books: books
      }))
      console.log("Books fetched on componentDidMount: " + books);
    })
  }

  moveBook = (book, shelf_to) => {
    console.log(`Book "${book.title}" will be moved to shelf ${ shelf_to}`)
    //alert(`Book "${book.title}" will be moved to shelf ${ shelf_to}`)
    
    BooksAPI.update(book,shelf_to).then((res) => (
      //console.log(res),
      BooksAPI.getAll()
    )).then((books) => {
      this.setState(() => ({
        books: books
      }))
      console.log("Book moved. New state: " + this.state.books);
    })
  }

  render() {
    return (
      <div className="app">        
          <Route exact path='/' render={() => (
            <MainPage
              books={ this.state.books }
              onMoveBook={ this.moveBook }
            />
          ) }/>

          <Route path='/search' render={() => (
            <SearchPage 
              books={ this.state.books }
              onMoveBook={this.moveBook}
            />
          ) }/>
      </div>
    );
  }
}

export default BooksApp;
