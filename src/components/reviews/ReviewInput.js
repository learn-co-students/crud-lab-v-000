import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleReviewChange = (event) => {
    this.setState(
      {
        text: event.target.value,
      }
    )
  }

  handleReviewSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch(
      {
        type: 'ADD_REVIEW',
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      }
    );
    this.setState(
      {
        text: '',
      }
    )
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleReviewSubmit} >
          <input value={this.state.text} onChange={this.handleReviewChange} type="text"/>
          <input type="submit"/>
        </form>
        <div>
          <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
        </div>
      </div>
    );
  }
};

export default ReviewInput;
