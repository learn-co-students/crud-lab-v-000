import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleRestaurantClick(){
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div>
        <li>
          <strong>{this.props.restaurant.text}</strong> &nbsp;
          <button onClick={() => this.handleRestaurantClick()}>Delete
          </button>
        </li>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
      </div>
    );
  }
};

export default Restaurant;
