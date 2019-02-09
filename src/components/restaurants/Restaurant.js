import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li key={restaurant.id}>
          {restaurant.text}
          <button onClick={()=>deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} restaurantId={restaurant.id}/>

        </li>
      </div>
    );
  }
};

export default Restaurant;
