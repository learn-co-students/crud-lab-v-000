import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews } = this.props;
    console.log(reviews)

    const renderedReviews = reviews.map( 
    (rev, ind) => { return(<Review review={rev} key={ind} deleteReview={this.props.deleteReview}/>); 
    }); 

    return (
      <ul>
        { renderedReviews }
      </ul>
    );
  }
};

export default Reviews;
