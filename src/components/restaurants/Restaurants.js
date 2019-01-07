import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  displayRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} addReview={this.props.addReview} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>)
  }

  render() {
    return(
      <ul>
        {this.displayRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;