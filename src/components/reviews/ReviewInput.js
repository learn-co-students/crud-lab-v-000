import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: ''
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addReview(this.state.text, this.state.restaurantId)
    this.setState({
      text: '',
      restaurantId: ''
    })
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
      restaurantId: this.props.restaurantId
    })
  }

  render() {
    return (
      <div>
        Review:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
