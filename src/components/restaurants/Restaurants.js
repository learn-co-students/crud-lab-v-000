import React, { Component } from 'react';
//displays a list of restaurants
import Restaurant from './Restaurant'


class Restaurants extends Component {
  
  displayRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>)
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