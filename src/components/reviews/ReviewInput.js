import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {text: "", restaurantId: this.props.restaurantId};

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({text: ""});
  }

  handleChange = event => this.setState({text: event.target.value});

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" value="Submit Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
