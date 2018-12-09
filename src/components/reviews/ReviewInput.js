import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { addReview, restaurantId } = this.props;
    addReview({restaurantId: restaurantId, text: this.state.text})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
