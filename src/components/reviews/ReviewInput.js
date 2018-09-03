import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Write a review here!</label>
          <br></br>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
