import Restaurant from './Restaurant'
import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((r, i) => {
          console.log(r)
          return <Restaurant key={i} store={this.props.store} restaurant={r}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;
