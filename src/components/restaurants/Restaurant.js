import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      restaurant: this.props.restaurant,
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <div><ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/></div>
        <button onClick={this.handleOnClick} />
      </div>
    );
  }
};

export default Restaurant;
