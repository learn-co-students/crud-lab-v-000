import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = event => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }
  render() {
    // console.log('in Restaurant - this.props.restaurant', this.props.restaurant)

    const { restaurant } = this.props;
    return (
      <div>
        <li>
          Restaurant Name: {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
