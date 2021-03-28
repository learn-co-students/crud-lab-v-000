import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

class Reviews extends Component {
  renderReviews = () => {
    return this.props.reviews.map(review => {
      if (review.restaurantId === this.props.restaurantId) {
        return <Review key={review.id} review={review} deleteReview={this.props.delete} restaurantId={this.props.restaurantId}/>
      }
    })
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};
const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch({type: 'DELETE_REVIEW', id})
  }
}
export default connect(null, mapDispatchToProps) (Reviews);