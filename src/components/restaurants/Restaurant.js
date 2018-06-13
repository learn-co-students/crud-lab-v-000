import React, { Component } from 'react';

import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleClick = () => { 
    this.props.store.dispatch({ 
      type: 'DELETE_RESTAURANT', 
      id: this.props.restaurant.id
    })
  }

  render() {

    const restaurantName = this.props.restaurant.text
    const restaurantId = this.props.restaurant.id
    return (
      <li>
        <p>{restaurantName}</p>
        <button onClick={this.handleClick}>Delete</button>
        <ReviewInput restaurantId={restaurantId} store={this.props.store} />
      </li>
    );
  }
};

export default Restaurant;