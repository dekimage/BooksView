import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="singlebook">
        {book.title}
        </li>;
    });
  }

  render() {
    return <ul className="booklist">{this.renderList()}</ul>;
  }
}


function mapStateToProps (state) {
  //what ever is returned will pop as props into BookList
  return {books: state.books};
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
