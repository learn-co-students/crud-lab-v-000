import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Add Review</label>
          <input type="text" value={this.state.text}
          onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
