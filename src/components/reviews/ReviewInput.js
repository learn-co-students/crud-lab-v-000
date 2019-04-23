import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
  	text: '',
  	restaurantId: this.props.restaurantId
  }

  handleChange = event => {
  	this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
  	event.preventDefault();
  	this.props.addReview(this.state.text, this.state.restaurantId)
  	this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={event => this.handleSubmit(event)}>
        	<input type="text" onChange={this.handleChange} value={this.state.text} />
        	<input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
