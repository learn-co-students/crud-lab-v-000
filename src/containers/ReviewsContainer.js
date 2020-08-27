import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { restaurant, addReview, reviews } = this.props;

    return (
      <div>
        <ReviewInput
          restaurantId={restaurant.id}
          addReview={addReview}
        />
        {/* <Reviews {...reviews} /> */}
        <Reviews restaurantId={restaurant.id} reviews={reviews} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews });

const mapDispatchToProps = dispatch => {
  return {
    addReview: ({text, restaurantId}) => dispatch({type: 'ADD_REVIEW', text, restaurantId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
