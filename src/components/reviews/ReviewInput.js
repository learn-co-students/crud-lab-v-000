import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restId})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="text" label="Review Input" onChange={this.onChangeHandler}/>
        <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
