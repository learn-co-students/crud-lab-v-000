import React, { Component } from 'react';
import Reviews from '../reviews/Review';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleClick} value="Delete Review" /><br/>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
      </li>
    );
  }
};

export default Restaurant;