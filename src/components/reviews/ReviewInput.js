import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: this.props.restaurantId
    };
    console.log(this.state)
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state);
    this.setState({
      text: ' ',
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
