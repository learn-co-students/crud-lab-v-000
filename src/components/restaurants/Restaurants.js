import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteR, updateR } = this.props;
    
    return(
      <ul>
        {restaurants.map(restaurant => (
          <Restaurant restaurant={restaurant}
                      deleteR={deleteR}
                      formMethod={updateR}
                      key={restaurant.id} />
        ))}
      </ul>
    );
  }
};

export default Restaurants;