import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
	generateRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id}
		restaurant={restaurant} delete={this.props.deleteRestaurant}/>)

  render() {
    return(
      <ul>
        {this.generateRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;