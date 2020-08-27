import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  // handleClick(restaurant) {
  //   this.props.deleteRestaurant(restaurant.id)
  // }

  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
