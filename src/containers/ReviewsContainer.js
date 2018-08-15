import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  
  
  render() {
    
    const reviews = this.props.reviews.filter(rev=>this.props.restaurant.id===rev.restaurantId)
    debugger
    return (
      <div>
        <p>I'm rendering</p>
        <ReviewInput restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={reviews} delete={this.props.delete}/>
        
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    addReview: review => dispatch({type: "ADD_REVIEW", review }),
    delete: revId => dispatch({type: "DELETE_REVIEW", revId})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
