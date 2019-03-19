import React, { Component } from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    console.log('props: ', this.props)
    this.props.deleteRestaurant(this.props.id)
  }

  render() {
  
    return (
      this.props.text !== '' ?
      <div>
        <li>
          {this.props.text}
          <label> </label><button onClick={this.handleClick}>X</button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div> :
      null
    )
  }
}

export default Restaurant
