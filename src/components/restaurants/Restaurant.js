import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import Restaurants from './Restaurants'

class Restaurant extends Component {

  

  render() {
    const { restaurant } = this.props;
   debugger
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}>Delete</button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
