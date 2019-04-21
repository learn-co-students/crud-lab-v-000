import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }

   handleSubmit = (e) => {
    e.preventDefault()
    const { text } = this.state
    this.props.addReview({text, restaurantId: this.props.restaurantId })
    this.setState({
      text: ""
    })
  }

   handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placehoder="Review text"
          />
          <input 
            type="submit"
            value="Submit Review"
          />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
