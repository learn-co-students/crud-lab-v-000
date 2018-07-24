import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js';
import Reviews from '../reviews/Reviews.js';

class Restaurant extends Component {
  handleOnClick = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }

  render() {
    return(
      <li>
      <button onClick={this.handleOnClick}> Delete {this.props.restaurant.text}</button>
      <ReviewInput store={this.props.store} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} />
      </li>
    );
  }
};

export default Restaurant;
