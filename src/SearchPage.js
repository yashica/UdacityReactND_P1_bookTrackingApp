import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from "./BooksGrid";

class SearchPage extends Component {
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                className="close-search"
                to="/"
                /*onClick={() => this.setState({ showSearchPage: false })}*/
                /*onClick = { this.props.onNavigate }*/
              >
                Close
              </Link>
              <div className="search-books-input-wrapper">
                {
                  //NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  //You can find these search terms here:
                  //https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  //However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  //you don't find a specific author or title. Every search is limited by search terms.
                }
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <BooksGrid shelf={ "none" } books={[{
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
                },]} />
            </div>
          </div>
        );
    }
}

export default SearchPage