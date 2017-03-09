import React, { Component } from 'react'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  deleteRestaurant() {
    const {id} = this.props
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id
    })
  }
  render(){
    return(
      <div>
        <li>{this.props.text}</li>
        <button onClick={() => this.deleteRestaurant()}>Delete</button>
        <ReviewInput store={this.props.store} restaurantId={this.props.id} />
      </div>
    )
  }
}

export default Restaurant
