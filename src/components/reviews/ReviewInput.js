import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      restaurantId: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    this.props.addReview(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" onChange={this.handleOnChange} />
        <input type="submit"  />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
