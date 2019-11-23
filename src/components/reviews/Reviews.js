import React, { Component } from 'react';
import Review from './Review';


class Reviews extends Component {

  renderReviews = () => {
    if (this.props.reviews && this.props.reviews.map) {
       return this.props.reviews.map(review => < Review delete={this.props.deleteReview} key={review.id} review={review} />)
     }
  }
  


  render() {
    return (
      <ul>
        Reviews Component
        
         {this.renderReviews()}
      </ul>
    );
  }
};



export default(Reviews);