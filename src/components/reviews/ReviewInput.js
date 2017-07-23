import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''}
  }

  enterText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      restaurantId: this.props.restaurantId,
      text: this.state.text
    });

    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div className="reviews">
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.enterText} value={this.state.text} />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
