import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    const restoList = this.props.restos.map(resto =>
      <li><Restaurant restaurant={resto} delete={this.props.delete}/></li>
    )
    return(
      <ul>
        {restoList}
      </ul>
    );
  }
};

export default Restaurants;
