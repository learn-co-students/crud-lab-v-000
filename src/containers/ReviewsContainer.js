import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  linkedReviews = () => {
    const restaurant = this.props.restaurant
    return this.props.reviews.filter(review => review.restaurantId === restaurant.id )
  }

  render() {
    return (
      <div>
        <ReviewInput add={this.props.add} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.linkedReviews()} restaurantId={this.props.restaurant.id} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  add: review => dispatch({ type: 'ADD_REVIEW', review }),
  delete: id => dispatch({ type: 'DELETE_REVIEW', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
