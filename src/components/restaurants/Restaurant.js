import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  render() {
    return (
      <li>
        { this.props.restaurant.text }
        <button onClick={ () => this.handleClick() }>Delete</button>
        <ReviewInput restaurant={ this.props.restaurant } restaurantId={ this.props.restaurant.id }
        store={ this.props.store }
        />
        <br />
      </li>
    );
  }

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
};

export default Restaurant;