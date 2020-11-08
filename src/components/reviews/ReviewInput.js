import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
    text: ''
  }
}

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        Review:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
            type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
