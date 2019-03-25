import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
     const { restaurant, deleteRestaurant } = this.props;
    console.log("rest", restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={()=>deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
