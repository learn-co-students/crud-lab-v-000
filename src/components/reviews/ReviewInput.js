import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({ text: '' })
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.text }
            onChange={ this.handleOnChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
