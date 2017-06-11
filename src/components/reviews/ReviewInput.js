import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW', 
      review: {
        text: this.state.text,
      },
    })
    this.setState({ 
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Review</label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
