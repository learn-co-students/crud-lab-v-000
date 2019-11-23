import React, { Component } from 'react';
import Review from './Review';
import ReviewInput from './ReviewInput'
import { connect} from 'react-redux'

class Reviews extends Component {

  renderReviews = () => {
    if (this.props.reviews && this.props.reviews.map) {
       return this.props.reviews.map(review => < Review delete={this.props.deleteReview} key={review.id} review={review} />)
     }
  }
  


  render() {
    return (
      <ul>
        Reviews
        <ReviewInput addReview={this.props.addReview} />
         {this.renderReviews()}
      </ul>
    );
  }
};

const mapStateToProps = ({ reviews }) => ({ reviews })
 
const mapDispatchToProps = dispatch => ({
  
  addReview: text => dispatch({ type: "ADD_REVIEW", text}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
 })

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);