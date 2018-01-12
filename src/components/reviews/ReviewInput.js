import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
      restaurant: this.props.restaurant
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChange} value={this.state.text} /> <br />
          <input onSubmit={this.handleSubmit} value='Submit Review' type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
