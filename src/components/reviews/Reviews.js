import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
   const specific_reviews = this.props.store.getState().reviews.filter((review)=> {return review.restaurantId === this.props.id});

   const reviews = specific_reviews.map((review, index) => {return <Review review={review} text={review.text} id={review.review_id} key={index}  store={this.props.store}  />  })

    return (
      <ul>
        {reviews}
      </ul>
    )
  }
}

export default Reviews;
