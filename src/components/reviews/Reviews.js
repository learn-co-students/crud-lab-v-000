import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render(){
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviewComponents = reviews.map(review => <Review key={review.id} id={review.id} text={review.text} store={this.props.store}/>)
    return(
      <ul>
        {reviewComponents}
      </ul>
    )
  }
}

export default Reviews;
