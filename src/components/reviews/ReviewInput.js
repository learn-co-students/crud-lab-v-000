import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    restaurantId: this.props.restaurantId,
    text: ""
  }
  baseState = this.state

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const { review, formMethod, removeUpdateForm } = this.props
    const newReview = {...review, ...this.state}

    e.preventDefault()

    formMethod({...newReview, ...this.state})
    this.setState(this.baseState)
    if (removeUpdateForm) { removeUpdateForm() }
  }

  componentDidMount() {
    if (this.props.review) {
      this.setState({ text: this.props.review.text })
    }
  }

  render() {
    return (
      <React.Fragment>
        <form style={{display:'inline-block'}} onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Review"
                 value={this.state.text}
                 onChange={this.handleChange} />
          <input type="submit"
                 value={this.props.review ? "Edit" : "Add"} />
        </form>
      </React.Fragment>
    );
  }
};

export default ReviewInput;
