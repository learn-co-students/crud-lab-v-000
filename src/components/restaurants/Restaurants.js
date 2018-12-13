import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    return (
      this.props.restaurants.map((restaurant, i) => {
        return (<Restaurant restaurant={restaurant} delete={this.props.deleteRestaurant} key={i} />)
      })
    )
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
