import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {

    const {restaurant} = this.props

    return (
      <div>
        <li>
          <p>{restaurant.text}</p>
          <button onClick={()=> this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
