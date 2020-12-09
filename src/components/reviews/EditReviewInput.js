import React, { Component } from 'react';
//import Restaurant from './Restaurant';

class EditReviewInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
    text: this.props.review.text

    };
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let review = {
      id: this.props.review.id,
      text: this.state.text
    }
    this.props.editReview(review);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit ={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>

      </div>
    );
  }
};

export default EditReviewInput
