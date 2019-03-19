import React, { Component } from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    console.log('Reataurant: ', this.props.restaurant)
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const restaurant = this.props.restaurant

    return (
      restaurant.text !== '' ?
      <div>
        <li>
          {restaurant.text}
          <label> </label><button onClick={this.handleClick}>X</button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div> :
      null
    )
  }
}

export default Restaurant
