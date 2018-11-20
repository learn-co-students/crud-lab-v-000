import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
      restaurantId: this.props.restaurant.id
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state)
    this.setState({
      text: '',
      restaurantId: 0
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review: </label>
          <input type="text" onChange={this.handleChange}
            value={this.state.text} />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
