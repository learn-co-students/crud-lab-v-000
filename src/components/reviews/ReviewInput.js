import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const restaurant = { 
      restaurantId: this.props.restaurantId, 
      text: this.state.text 
    }
    
    this.props.addReview(restaurant)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="text" type="text" onChange={this.handleChange} />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
