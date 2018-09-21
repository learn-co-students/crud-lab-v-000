import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurantId={this.props.restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
