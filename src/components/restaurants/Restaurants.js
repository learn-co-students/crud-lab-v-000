import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((res) =>
          <Restaurant restaurant={res} delete={this.props.deleteRestaurant}
            key={res.id} />
        )}
      </ul>
    );
  }
};

export default Restaurants;
