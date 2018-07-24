import React, { Component } from 'react'
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({
      text: ''
    })
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' onChange={(e) => this.handleChange(e)} />
          <input type='submit' />
        </form>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </div>
    )
  }
};

export default ReviewInput
