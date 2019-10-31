import React, { Component } from 'react';

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
    let id = this.props.restaurantId;
    this.props.addReview(this.state.text, id);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit" value="Add Review"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
