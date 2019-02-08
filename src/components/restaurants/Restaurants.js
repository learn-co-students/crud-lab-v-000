import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

	renderRestaurants = () => this.props.restaurants.map((r) => 
		<Restaurant delete={this.props.delete} key={r.id} restaurant={r} />
	)

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;