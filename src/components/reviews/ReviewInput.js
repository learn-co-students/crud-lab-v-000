import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => this.setState({text: event.target.value})
  handleSubmit = event => {event.preventDefault(); this.props.store.dispatch({type: 'ADD_REVIEW', text: this.state.text, id: this.props.restaurantId})}
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Review this Restaurant</label>
        <input type='text' onChange={this.handleChange} />
        <input type='submit' value="submit" />
      </form>
      <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
