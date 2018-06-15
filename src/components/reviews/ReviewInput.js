import React, { Component } from 'react';
import Reviews from './Reviews';
import Review from './Review';

class ReviewInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      restaurantId: this.props.restaurantId,
      review: {
        text: this.state.text,
      },
    });
    this.setState({
      text: '',
    });
  }


  render() {

    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>

        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
