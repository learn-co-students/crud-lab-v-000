import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      id: this.props.restaurant.id,
      type: 'DELETE_RESTAURANT'
    });
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text} <strong> </strong>
        <button onClick={this.handleOnClick}>x</button>

        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;
