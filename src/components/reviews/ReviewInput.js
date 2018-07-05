import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restuarantId: this.props.restuarantId
      }
    })
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        Reviews:
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        New Review
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleChange(event)}/>
          <input type="submit" value="Create Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
