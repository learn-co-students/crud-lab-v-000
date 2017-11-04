import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      review: this.props.review,
      id: this.props.review.id,
      restaurantId: this.props.restaurantId
    });
  }

  render() {
    return (
      <div>
        <li>{this.props.review.text}</li>
        <button onClick={this.handleOnClick} />
      </div>
    );
  }
};

export default Review;