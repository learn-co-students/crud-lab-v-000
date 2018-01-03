import React, { Component } from 'react';
import Review from "../reviews/Review";
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {

  handleClick = function () {
      this.props.store.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }.bind(this);

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text} <button onClick={this.handleClick}>Delete</button> </li>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
      </div>
    );
  }
};

export default Restaurant;