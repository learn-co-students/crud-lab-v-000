import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
import Reviews from '../reviews/Reviews';

class Restaurant extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleOnClick}>Delete</button>

        <ul>
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
        </ul>

      </li>
    );
  }
};

export default Restaurant;
