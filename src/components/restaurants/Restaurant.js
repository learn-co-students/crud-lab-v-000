import React, { Component } from 'react';
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {
  handleDelete = (e) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  };

  render() {
    return (
      <li key={this.props.restaurant.id}>
        {this.props.restaurant.text}
        <button onClick={this.handleDelete}>Delete restaurant</button>

        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;