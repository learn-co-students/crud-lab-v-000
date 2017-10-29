import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant, index)=>{
          return (<Restaurant restaurant={restaurant} key={index}
            store={this.props.store} />);
        })}
      </ul>
    );
  }
};

export default Restaurants;
