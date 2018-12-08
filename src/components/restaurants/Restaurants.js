import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  restaurantsList = () => this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} dispatch={this.props.dispatch} restaurant={restaurant} />)

  render() {
    return(
      <ul>
        {this.restaurantsList()}
      </ul>
    );
  }
};

export default Restaurants;
