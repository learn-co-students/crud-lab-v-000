import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  // Function to delete restaurant (used instead of anonymous function due to error of "browser flakiness")
  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    const { restaurant } = this.props;
    // console.log('Restaurant : ', restaurant);

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
