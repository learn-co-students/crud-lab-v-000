import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

class Reviews extends Component {
  
  render() {
    return (
      <ul>
        {this.renderReview()}
      </ul>
    );
  }

  renderReview = () => {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return reviews.map(review => <Review key={review.id} deleteReview={this.props.deleteReview} review={review}/> )
  }
};

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(null, mapDispatchToProps)(Reviews);