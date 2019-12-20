import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review);

    this.setState({
      text: '',
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Add Review </label>
          <input type="text" value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
