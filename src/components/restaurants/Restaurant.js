import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <li id={this.props.id}>
        {this.props.text}
      </li>
    );
  }
};

export default Restaurant;
