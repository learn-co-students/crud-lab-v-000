import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => 
  this.props.restaurants.map(restaurant => {
    return <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} />
  })

  render() {
    return(
      <div>
        Restaurants
        <ul>
          {this.renderRestaurants()}
        </ul>
      </div>
    );
  }
};

export default Restaurants;