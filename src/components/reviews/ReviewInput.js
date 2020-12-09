import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.text, restaurantId: this.props.restaurantId)
    this.setState({
      text: ''
    });
  }

    handleOnChange(event) {
      this.setState({
        text: event.target.value,
      });
    }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>add review </label>
            <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
