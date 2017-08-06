import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        <Review store={this.props.store} />
      </ul>
    );
  }
};

export default Reviews;