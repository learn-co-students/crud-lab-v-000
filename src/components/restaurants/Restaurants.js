import React, { Component } from 'react';

class Restaurants extends Component {

  render() {
    return(
      <ul>
        {this.props.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
