import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import RestaurantUpdate from './RestaurantUpdate'

class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div>        
        <br />
        <li>      
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          
          <RestaurantUpdate restaurant={restaurant} updateRestaurant={this.props.updateRestaurant} />
          
          <ReviewsContainer restaurantId={restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
