import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => {

    return this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} id={restaurant.id}  deleteRestaurant={this.props.deleteRestaurant} deleteAssociatedReview={this.props.deleteAssociatedReview} editRestaurant={this.props.editRestaurant}/>)
  }

  render() {


    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
