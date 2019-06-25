import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
      < br/>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> DELETE </button>
              <ReviewsContainer restaurant = {restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
