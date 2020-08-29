import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
    

  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId )
  
    const renderReviews = associatedReviews.map(review => <Review key={review.restaurantId} review={review} deleteReview={this.props.deleteReview}/>)
    return(
        <div>
            <ul>
            {renderReviews}
            </ul>
        </div>

      


      
    );
  }
};

export default Reviews;