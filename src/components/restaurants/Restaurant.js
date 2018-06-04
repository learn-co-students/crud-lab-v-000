import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'; 

class Restaurant extends Component {

  handleRestaurantClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT', 
      id: this.props.restaurant.id
    });
  }

  render() {
    return (
      <div>
        <li> 
          {this.props.restaurant.text} 
          <button onClick={this.handleRestaurantClick.bind(this)}> Delete </button> 
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} /> 
        </li> 
      </div>
    );
  }
};

export default Restaurant;