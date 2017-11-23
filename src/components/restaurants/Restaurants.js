import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
    
    const restuarants = this.props.store.getState().restaurants.map((restaurant,index)=> (
    <Restaurant restaurant={restaurant} key={index} store={this.props.store}/> )
        )
      
    return(
      <ul>
       {restuarants}
      </ul>
    );
  }
};

export default Restaurants;