import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('inside handle submit', [this.props.restaurantId, this.state.text])
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review</label> <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          <input type="submit"></input>
      </form>
    </div>
    );
  }
};

export default ReviewInput;
