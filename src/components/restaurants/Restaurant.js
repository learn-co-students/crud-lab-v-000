import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    // console.log(this);
    
    // console.log(this.props.restaurant.id);
    // console.log(this.restaurantId);
    
    
    // let showReview = () => {
    //   if(restaurant.id === review.restaurantId)
    // }
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
