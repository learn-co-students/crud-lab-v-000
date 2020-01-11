import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  //testing git

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
        </li>
        <button onClick={this.handleOnClick}>Delete</button>
        <ReviewsContainer restaurant={restaurant}/>        
      </div>
    );
  }
};

export default Restaurant;
