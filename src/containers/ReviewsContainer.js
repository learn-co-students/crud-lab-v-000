import React, { Component } from 'react';
import {connect} from 'react-redux'

import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews})=>({reviews});
const mapDispatchToProps = (dispatch)=>{
    return {
        addReview: (review)=>dispatch({type:"ADD_REVIEW", review})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
