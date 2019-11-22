import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
