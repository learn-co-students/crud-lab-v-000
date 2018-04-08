import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      restaurantID: this.props.id,
      content: this.state.text
    });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
            <label htmlFor="addReview">Add Review: </label>
            <input id="addReview" type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          <input type="submit" value="Submit Review" />
        </form>
        <Reviews id={this.props.id} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
