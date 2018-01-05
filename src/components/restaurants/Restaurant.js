import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js'

class Restaurant extends Component {

  handleDelete = (event) =>{
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
  render() {
    return (
      <div>
        <li>{this.props.restaurant.text} - <button onClick={this.handleDelete.bind(this)}>Delete</button></li>
        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
      </div>
    );
  }
};

export default Restaurant;