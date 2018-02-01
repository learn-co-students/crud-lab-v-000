import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
      restaurantId: this.props.review.restaurantId
    });
  };

  render() {
    return (
      <li>
        {this.props.review.text}&nbsp;&nbsp;&nbsp;
        <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
};

export default Review;