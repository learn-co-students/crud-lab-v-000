import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addRev={this.props.addRev}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.props.reviews}
          delRev={this.props.delRev}
          restaurantId={this.props.restaurant.id}
        />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => {
  return{
    addRev: (revObj) => dispatch({type: 'ADD_REVIEW', revObj}),
    delRev: (revId) => dispatch({type: 'DELETE_REVIEW', id: revId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
