import React, { Component } from 'react';

class Review extends Component {
  render() {
    return (
      <li>
        {this.props.restaurant} reviews...
      </li>
    );
  }
};

export default Review;