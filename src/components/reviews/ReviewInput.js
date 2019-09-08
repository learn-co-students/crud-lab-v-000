import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    console.log('ReviewInput - HOS - this.props', this.props)
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text"
            value={this.state.text}
            onChange={event => this.handleOnChange(event)} />
          <input type="submit" value="Submit Review" />
        </form>
        Review Input
      </div>
    );
  }
};

export default ReviewInput;
