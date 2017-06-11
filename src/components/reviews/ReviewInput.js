import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();
    debugger
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      },
    });
    this.setState({
      text: ''
    });
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Review</label>
          <input
            type="text" 
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit"/>
        </form>
        <Reviews 
          store={this.props.store}
          restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
