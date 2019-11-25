import React, { Component } from 'react';
import Review from './Review';
import { bindActionCreators } from 'redux';


class Reviews extends Component {

  renderReviews = () => {
    if (this.props.reviews && this.props.reviews.map) {

      // return this.props.reviews.map(
// review => < Review delete={this.props.deleteReview} key={review.id} review={review} />)
      
      
      return this.props.reviews.filter(
        review => review.id !== review.restaurant.Id

        // debugger
        // review => console.log(review)


      )

      // review => < Review delete={this.props.deleteReview} key={review.id} review={review} />)

      }
  }
  

  //... Use filter..... return the review where the restaurant ID on the review match
  // the resutatnt Id in props the review ID.and display it.. 
  
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