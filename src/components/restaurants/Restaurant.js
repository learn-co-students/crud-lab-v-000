import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
// responsible for each restaurant
// contains the button to delete 
// Users can delete restaurants
// each restaurant has an id (cuid)
class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant, addReview, reviews, deleteReview } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} addReview={addReview} reviews={reviews} deleteReview={deleteReview}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
