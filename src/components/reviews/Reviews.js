import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props

    const renderReviews = reviews.filter(review => review.restaurantId === restaurantId)
                                 .map(filteredReview => { return (
                                                            <Review
                                                              key={filteredReview.id}
                                                              review={filteredReview}
                                                              deleteReview={deleteReview}
                                                            />
                                                          )
                                                        })

    return (
      <div>
        <ul>
          {renderReviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;
