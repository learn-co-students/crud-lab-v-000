import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <div>Restaurants:
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id}
                                                   restaurant={restaurant}
                                                   delete={this.props.delete}/>)}
      </ul>
      </div>
    );
  }
};

export default Restaurants;
