import React, { Component } from 'react';
import Reviews from './Reviews';
import { addReview } from '../../actions/reviews';


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
    this.props.addReview(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="input"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
