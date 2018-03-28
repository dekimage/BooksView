import React, { Component } from 'react';
import { connect } from 'react-redux';




class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className="nobook"><h1> Select a book</h1></div>
    }
    return (
      <div className="maindetails">
        <h3 className="detailsfor">Details for:</h3>
        <div className="details">
        
          <div><h3>Title:</h3> <h4 className="booktitle">{this.props.book.title}</h4></div>
          <div><h3>Pages:</h3> <h4 className="bookpages">{this.props.book.pages}</h4> </div>

        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {book: state.activeBook};
}
export default connect(mapStateToProps)(BookDetail);
