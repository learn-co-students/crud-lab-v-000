import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
   return(
     <ul>
     {this.props.restaurants.map(rest => <Restaurant key={rest.id} restaurant={rest} delete={this.props.delete} />)}
     </ul>
   )
 }
}

export default Restaurants;
