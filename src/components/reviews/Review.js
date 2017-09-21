import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.dispatch({
      type: 'DELETE_REVIEW',
      restaurant: this.props.restaurant,
      id: this.props.review.id
    });
  }

  render() {
    return (<li>{this.props.review.text} <button onClick={this.handleOnClick}>Delete</button></li>);
  }
};

export default Review;
