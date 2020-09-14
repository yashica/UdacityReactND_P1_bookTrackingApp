import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    state = {
        currentShelf: this.props.shelf,
        shelfFlavor: this.props.shelfFlavor
    };

    moveBook = (shelf_from, shelf_to) => {
        this.props.onMoveBook(this.props.bookData,shelf_from,shelf_to);
    }

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
          <BookShelfChanger 
                shelf = { this.props.shelf }
                onMoveBook={ this.moveBook }
            />
        </div>
        <div className="book-title">
          { title }
        </div>
        <div className="book-authors">{ author }</div>
        <div>Shelf = {this.props.shelf}</div>
      </div>

        )
    }
}

export default Book