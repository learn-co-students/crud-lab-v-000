import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()

    this.props.addReview(this.state)
    this.setState({
      restaurantId: this.props.restaurant.id,
      text: ""
    })
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <label>Add a review: </label>
          <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
