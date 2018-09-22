import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state= {
    text: '',
    restaurantId: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text,restaurantId: this.props.restaurantId})  
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' 
          value={this.state.text}
          onChange={(e) => this.setState({text: e.target.value})} 
          placeholder='Enter Review'/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
