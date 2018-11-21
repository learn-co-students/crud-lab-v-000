import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    const reviewsList = this.props.reviews.map(rev => {
      return (<Reviews key={rev.id} review={rev} />)
    })
    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;
