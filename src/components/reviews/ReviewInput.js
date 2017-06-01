import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }


  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
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

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>Won't you leave a review?</p>
          <input
            type='text'
            value={this.state.text}
            onChange={(event) => this.handleChange(event)} /><br />
          <input type='submit'/>
          <Reviews
            store={this.props.store}
            restaurantId={this.props.restaurantId}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
