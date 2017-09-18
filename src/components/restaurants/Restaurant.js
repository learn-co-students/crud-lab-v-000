import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleDeleteClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <li>
      {this.props.restaurant.text}
      <button onClick={this.handleDeleteClick}>Delete</button>
      <ReviewInput restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} />
      </li>
    );
  }
};

export default Restaurant;
