import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const restaurant = this.props;
    // const {restaurant} = this.props;
    console.log('RestaurantProps: ', this.props, restaurant)
    return (
      <div>
        <li>
          { this.props.restaurant.text }
          <button onClick={ this.handleOnClick }>X</button>
          <ReviewsContainer restaurant={ this.props.restaurant } />
        </li>
      </div>
    );
  }
};

export default Restaurant;
