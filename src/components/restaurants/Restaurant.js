import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  render() {
    const { restaurant, handleRemove } = this.props;

    return (      
        <li>
          {restaurant.text}
          <button onClick={() => handleRemove(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
    );
  }
};

export default Restaurant;
