import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div className='restaurant'>
          <li>{ this.props.restaurant.text }</li>
        <button onClick={ this.handleOnClick }>Delete Restaurant</button>
        <div className='review-input'>
          <label>Add a Review</label>
          <ReviewInput
            store={ this.props.store }
            restaurantId={ this.props.restaurant.id }
          />
        </div>
      </div>
    );
  }
};

export default Restaurant;