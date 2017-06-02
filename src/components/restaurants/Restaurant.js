import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js';

class Restaurant extends Component {
  handleOnClick(ev) {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  };

  render() {
    return (
      <li>
        <div>
          <p>{this.props.restaurant.text}</p>
          <button onClick={(ev) => this.handleOnClick(ev)}>Delete</button>
        </div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          store={this.props.store} />
      </li>
    );
  }
};

export default Restaurant;
