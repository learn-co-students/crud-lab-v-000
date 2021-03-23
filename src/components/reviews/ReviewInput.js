import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
    restaurantId: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value, 
      restaurantId: this.props.restaurantId
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state.text, this.state.restaurantId);
    this.setState({
      text: '',
      restaurantId: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input 
            type="text"
            value={this.state.reviewName}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
