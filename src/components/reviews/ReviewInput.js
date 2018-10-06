import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      //id: this.state.id + 1,
     text: event.target.value,
    });
  }

handleOnSubmit(event) {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
       <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            placeholder="review"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};


export default ReviewInput;
