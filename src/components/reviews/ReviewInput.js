import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Write a review:
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleOnChange} value={this.state.text}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
