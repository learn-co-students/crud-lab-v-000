import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    const rests = this.props.store.getState().restaurants.map((rest, index)=>{
      return <Restaurant restaurant={rest} store={this.props.store} key={index}/>
    })

    return(
      <ul>
        {rests}
      </ul>
    );
  }
};

export default Restaurants;