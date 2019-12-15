import React, { Component } from 'react';


class ReviewInput extends Component {

	state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

 handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
