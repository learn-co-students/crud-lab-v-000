import React, { Component } from 'react';

class Review extends Component {

  handleDelete = () =>{
    this.props.store.dispatch({
      type: 'REMOVE_REVIEW',
      review: this.props.review
    })
  }

  render() {
    return (
      <li>{this.props.review.text} - <button onClick={this.handleDelete.bind(this)}>Delete</button></li>
    );
  }
};

export default Review;