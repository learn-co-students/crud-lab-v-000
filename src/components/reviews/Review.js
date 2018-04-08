import React, { Component } from 'react';

class Review extends Component {
  handleClick () {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      // restaurantId: this.props.restaurantId,
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        <p>{this.props.review.text}   ---   <button onClick={() => this.handleClick()}>Delete Review</button></p>
      </li>
    );
  }
};

export default Review;
