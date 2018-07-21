import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js';

class Restaurant extends Component {
  
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }
  
  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={this.handleDelete}>Delete Restaurant</button>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </li>
    );
  }
};

export default Restaurant;