import React, { Component } from 'react';


class ReviewInput extends Component {

  state = {
    text: ''
  }

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />

        </form>
      </div>
    );
  }
};

export default ReviewInput;
