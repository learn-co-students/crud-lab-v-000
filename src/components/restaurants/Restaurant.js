import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
   this.props.deleteRestaurant(this.props.restaurant.id)
 }

  render() {
    const { restaurant } = this.props;

    return (
        <li>
          <div>{restaurant.text}</div>
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
    );
  }
};

export default Restaurant;
