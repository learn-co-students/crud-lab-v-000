import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restList = this.props.restaurants.map(rest => {
      return (<Restaurant key={rest.id} restaurant={rest} deleteRest={this.props.deleteRest} />)
    })
    return(
       <ul>
         {restList}
      </ul>
    );
  }
};

export default Restaurants;
