import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  filterReviews = (restaurant) => {
    const state = this.props.store.getState();
    if (state.reviews) {
      return state.reviews.filter(review => 
        review.restaurantId === restaurant.id
      )
    }
    return [];
  }
  render() {
    const restaurants = this.props.store.getState()
                  .restaurants.map((restaurant, index) => {
      return <Restaurant key={index} restaurant={restaurant} 
                        store={this.props.store}
                        reviews={this.filterReviews(restaurant)} />
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;