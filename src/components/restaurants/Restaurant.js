import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const restaurant = this.props.restaurant;
    
    return (
      <div>
        <li key={restaurant.id}>
          {restaurant.text}
          <button>hello</button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
