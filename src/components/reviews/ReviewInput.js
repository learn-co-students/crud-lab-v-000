import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
      restaurantId: this.props.restaurantId
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.text} />
          <input type='submit' />
        </form>
        Reviews:
        <Reviews store={this.props.store} />
      </div>
    );
  }
};

export default ReviewInput;
