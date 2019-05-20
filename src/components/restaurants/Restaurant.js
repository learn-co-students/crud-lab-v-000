import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
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

  handleClick = ()=>{
    this.props.deleteRestaurant(this.props.restaurant.id);
  }
};

export default Restaurant;
