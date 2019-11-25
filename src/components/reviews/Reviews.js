import React, { Component } from 'react';
import Review from './Review';
import { bindActionCreators } from 'redux';


class Reviews extends Component {

    //  2 step process.    do a filters... and return a    .map
  renderReviews = () => {
    if (this.props.reviews && this.props.reviews.map) {

      // return this.props.reviews.map(
// review => < Review delete={this.props.deleteReview} key={review.id} review={review} />)
      
   debugger   
    const reviewList = this.props.reviews.filter( review => review.restaurantId == this.props.restaurantId
     
       )

     
    return   reviewList.map(singleReview => 
      
            <Review delete={this.props.deleteReview} key={singleReview.id} review={singleReview} />
        
        )
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