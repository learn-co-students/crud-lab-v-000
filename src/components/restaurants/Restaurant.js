import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    // translates to const restaurant = this.props.restaurant

    // const deleteRestaurant = () => {
      
    //   const deleteRestaurant = this.props.delete;

    //   return deleteRestaurant(restaurant.id)
    // }

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} />
          {/* // the above line was provided by the lab */}
        </li>
      </div>
    );
  }
};

export default Restaurant;
