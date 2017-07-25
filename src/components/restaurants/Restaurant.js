import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js';

class Restaurant extends Component {
  
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
      reviews: [],
    });
  }
  
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleOnClick} />
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
        </li>
      </div>
    );
  }
};

export default Restaurant;