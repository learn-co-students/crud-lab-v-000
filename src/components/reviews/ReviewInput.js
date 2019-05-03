import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitReview(this.state, this.props.restaurant.id)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review</label>
          <input onChange={this.handleChange} type="text" value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
