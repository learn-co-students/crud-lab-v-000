import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux'

class Reviews extends Component {
	// renderReviews = () => this.props.reviews.map((review, id) => <Review delete={this.props.delete} key={review.id} review={review} />)

  render() {
    return (
      <ul>
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(null, mapDispatchToProps)(Reviews)