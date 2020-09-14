import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from "./BookShelf";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      //showSearchPage: false,
      books_currentlyReading: [
        {
          title: `To Kill a Mockingbird`,
          author: `Harper Lee`,
          coverimgURL: `http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api`,
        },
        {
          title: `Ender's Game`,
          author: `Orson Scott Card`,
          coverimgURL: `http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api`,
        },
      ],
  
      books_wantToRead: [
        {
          title: `1776`,
          author: `David McCullough`,
          coverimgURL: `http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api`,
        },
        {
          title: `Harry Potter and the Sorcerer's Stone`,
          author: `J.K. Rowling`,
          coverimgURL: `http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api`,
        },
      ],
  
      books_read: [
        {
          title: `The Hobbit`,
          author: `J.R.R. Tolkien`,
          coverimgURL: `http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api`,
        },
        {
          title: `Oh, the Places You'll Go!`,
          author: `Seuss`,
          coverimgURL: `http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api`,
        },
        {
          title: `The Adventures of Tom Sawyer`,
          author: `Mark Twain`,
          coverimgURL: `http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api`,
        },
      ],
      books_other: [],
  
    };
  }
  

  moveBook = (book, shelf_from, shelf_to) => {
    this.removeBookFromShelf(book,shelf_from);
    this.addBookToShelf(book,shelf_to);
    return 0;
  }

  removeBookFromShelf = (book,shelfID) => {
    switch(shelfID) {
      case 'currentlyReading':
        //alert(`Book ${book.title} will be removed from books_currentlyReading`);
        this.setState((currentState) => ({
          books_currentlyReading: currentState.books_currentlyReading.filter((b) => {
            return b.title !== book.title
          })
        }))
        break;
      case 'wantToRead':
        //alert(`Book ${book.title} will be removed from books_wantToRead`);
        this.setState((currentState) => ({
          books_wantToRead: currentState.books_wantToRead.filter((b) => {
            return b.title !== book.title
          })
        }))
        break;
      case 'read':
        //alert(`Book ${book.title} will be removed from books_red`);
        this.setState((currentState) => ({
          books_read: currentState.books_read.filter((b) => {
            return b.title !== book.title
          })
        }))
        break;
      default:
        return 0;
    }
  }

  addBookToShelf = (book,shelfID) => {
    switch(shelfID) {
      case 'currentlyReading':
        //alert(`Book ${book.title} will be added to books_currentlyReading`);
        this.setState((currentState) => ({
          books_currentlyReading: currentState.books_currentlyReading.concat([book])
        }))
        break;
      case 'wantToRead':
        //alert(`Book ${book.title} will be added to books_wantToRead`);
        this.setState((currentState) => ({
          books_wantToRead: currentState.books_wantToRead.concat([book])
        }))
        break;
      case 'read':
        //alert(`Book ${book.title} will be added to books_red`);
        this.setState((currentState) => ({
          books_read: currentState.books_read.concat([book])
        }))
        break;
      default:
        return 0;
    }
  }
  
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
              shelfID='currentlyReading' 
              books={ this.state.books_currentlyReading}
              onMoveBook={this.moveBook}
            />
            <BookShelf 
              caption='Want to Read' 
              shelfID='wantToRead' 
              books={ this.state.books_wantToRead }
              onMoveBook={this.moveBook}
            />
            <BookShelf 
              caption='Read' 
              shelfID='read' 
              books={ this.state.books_read }
              onMoveBook={this.moveBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" /*onClick = { this.props.onNavigate }onClick={() => this.setState({ showSearchPage: true })}*/>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage