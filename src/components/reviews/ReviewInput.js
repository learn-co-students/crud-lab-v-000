import React, { Component } from 'react'
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({text: ''})
  }
  render(){
    return (<div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.text} />
      </form>
      <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
    </div>
    )
  }
}

export default ReviewInput;
