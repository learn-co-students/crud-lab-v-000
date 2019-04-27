import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const review = {
      text: this.state.text,
      id: this.props.restaurantId
    }
    this.props.addReview(review);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleOnSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.text} />
        <input type="submit"/>
      </form>
      </div>
    );
  }
};

export default ReviewInput;
