import React, { Component } from 'react'
import BooksGrid from "./BooksGrid";

class BookShelf extends Component {
/*     state = {
        shelfID: this.props.shelfID,
    };  */

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.caption}</h2>
                <div className="bookshelf-books">
                    <BooksGrid 
                        //shelf={ this.state.shelfID } 
                        books={ this.props.books }
                        onMoveBook={ this.props.onMoveBook } 
                    />
                </div>
            </div>
        )
    }
}

export default BookShelf