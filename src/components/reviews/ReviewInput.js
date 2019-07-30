import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <br/>
        <label>Add a Review for this Restaurant:</label>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />{' '}
        <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
