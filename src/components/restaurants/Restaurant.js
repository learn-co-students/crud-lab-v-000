import React, { Component } from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const {restaurant} = this.props

    return (
      this.props.restaurant.id !== '' ?
      <div>
        <br />
        <li>
          {restaurant.text}
          <label> </label><button onClick={this.handleOnClick}>X</button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div> :
      null
    )
  }
}

export default Restaurant