import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  };
  render() {
    return (
      <div>
        <li>{this.props.restaurant.text} - <button onClick={this.handleClick}>Delete Restaurant</button></li>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
      </div>
    );
  }
};

export default Restaurant;
