import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.restaurants.map ((restaurant, id) => 
    <Restaurant key={id} deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} />)

  render() {
    console.log("render Restaurants",this.props.restaurants)
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;