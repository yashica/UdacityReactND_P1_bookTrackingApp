import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    moveBook = (shelf_to) => {
        this.props.onMoveBook(this.props.bookData, shelf_to);
    }

    render() {
        const { authors, title, imageLinks } = this.props.bookData
        return (<div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: imageLinks ? `url(${ imageLinks.thumbnail })`:''
            }}
          />
          <BookShelfChanger 
                shelf = { this.props.bookData.shelf }
                onMoveBook={ this.moveBook }
            />
        </div>
        <div className="book-title">
          { title }
        </div>
        <div className="book-authors">{ authors ? authors : 'No author available'}</div>
      </div>

        )
    }
}

export default Book