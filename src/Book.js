import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    render() {
        const { author, title, coverimgURL } = this.props.bookData
        return (<div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url( ${ coverimgURL })`
            }}
          />
          <BookShelfChanger />
        </div>
        <div className="book-title">
          { title }
        </div>
        <div className="book-authors">{ author }</div>
      </div>

        )
    }
}

export default Book