import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  render() {
    return (
      <ul>
        Reviews
        <li key={props.review.id}>{props.review.name}</li><button onClick={() => props.delete(props.review.id)}>DELETE_BAND</button>
      </ul>
    );
  }
};

export default Reviews;