import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick() {
    this.props.deleteRestaurant(this.props.restaurant.id);
    // cannot use "deleteRestaurant(restaurant.id)" outside render as
    // const deleteRestaurant = this.props.restaurant can only be defined
    // inside the render function.
  }

  render() {
    const restaurant = this.props.restaurant;
    // restaurant format that will be passed is [id: "co7sx...", text: "Mcdo"] 
    // when data gets inserted as defined in reducer's "ADD_RESTAURANT" case.
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
