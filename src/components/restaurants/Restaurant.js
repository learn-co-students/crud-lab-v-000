import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <li>
        { this.props.restaurant.text }
      </li>
    );
  }
};

export default Restaurant;
