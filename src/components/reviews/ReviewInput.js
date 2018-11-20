import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleKeyDown(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>add review</label>
          <input type="text" onChange={(event) => this.handleKeyDown(event)} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
