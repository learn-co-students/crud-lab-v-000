import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={text: '', restaurantId: this.props.restaurantId}

  handleChange = event =>{
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRev(this.state)
    this.setState({text: ''})
  }

  render() {
    // debugger
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
