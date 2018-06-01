import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((r,i)=>{
      return <Restaurant restaurant={r} id={r.id} store={this.props.store} key={i} />
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;