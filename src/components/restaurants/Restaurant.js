import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <li>
          <h1 key={this.props.index}>{this.props.restaurant.text}</h1>
      </li>
    );
  }
};

export default Restaurant;