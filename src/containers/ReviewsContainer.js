import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

	handleDispatch = (content) => {
		this.props.dispatch({
			type: "ADD_REVIEW", review: { text: content, restaurantId: this.props.restaurant.id }
		});
	}
	

	reviewsByRest = () => {
		let restaurantId = this.props.restaurant.id;
		return this.props.reviews.filter(r => r.restaurantId === restaurantId)
	}

	handleDelete = (id) => {
		this.props.dispatch({type: "DELETE_REVIEW", id: id})
	}

  render() {
    return (
      <div>
        <ReviewInput dispatch={this.handleDispatch} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.reviewsByRest()} restaurantId={this.props.restaurant.id} delete={id => this.handleDelete(id)}/>
      </div>
    )
  }
}



const mapStateToProps = state => {
	console.log("current state is: ", state)
	return {reviews: state.reviews}
}

export default connect(mapStateToProps)(ReviewsContainer)
