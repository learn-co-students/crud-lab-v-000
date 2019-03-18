import React, { Component } from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    this.props.deleteRestaurant(this.props.id)
  }

  render() {
    const restaurant = this.props

    return (
      restaurant.text !== '' ?
      <div>
        <li>
          {restaurant.text}
          <label> </label><button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div> :
      null
    )
  }
}

export default Restaurant
