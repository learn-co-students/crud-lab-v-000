import React, { Component } from 'react'
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
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

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return (
    <div>
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
        <input type="submit"/>
      </form>
      <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
    </div>
    )
  }
}

export default ReviewInput;
