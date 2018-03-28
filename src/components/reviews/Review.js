import React, { Component } from 'react';

class Review extends Component {

  deleteReview(event){
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    let text = this.props.review.text
    return (
      <li>
          {text}
          <button onClick={event => this.deleteReview(event)}> Delete Review </button>
      </li>
    );
  }
};

export default Review;