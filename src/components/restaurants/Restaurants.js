import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        <h2>Restaurants</h2>
        { this.props.restaurants.map(restaurant => {
          return (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              deleteRestaurant={this.props.deleteRestaurant}
            />
          )
        }) }
      </ul>
    );
  }
}

export default Restaurants;
