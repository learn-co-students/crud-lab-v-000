import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
        </li>
      </div>
    );
  }
};

export default Restaurant;
