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
    this.props.addReview(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event)=>this.handleSubmit(event)}>
            <textarea
              type="textarea"
              placeholder="Write your review..."
              value={this.state.text}
              onChange={(event) => this.handleChange(event)} />
            <input type="submit" />

          </form>
        </div>
      </div>
    );
  }
};

export default ReviewInput;
