import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
      	{this.props.rest.map(rest =>
      		<Restaurant restaurant={rest} key={rest.id} deleteRestaurant={this.props.deleteRestaurant}/>
      	)}
      </ul>
    );
  }
};

export default Restaurants;
