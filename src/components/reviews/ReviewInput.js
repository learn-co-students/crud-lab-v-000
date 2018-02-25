import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: ""
      };
    }

    handleOnChange(event) { //changes state as you type
      this.setState({
        text: event.target.value,
      });
    }

    handleOnSubmit(event) { //dispatch state of text to action
      event.preventDefault();
      this.props.store.dispatch({
        type: 'ADD_REVIEW',
        review: {
          text: this.state.text,
          restaurantId: this.props.restaurantId
        },
      });
      this.setState({ //resetting component state
        text: '',
      });
    }

    render() {
      return (
        <div>
          <p><strong>Add a Review</strong></p>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text} />
            <input type="submit" />
          </form>
          <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        </div>
      );
    }
};

export default ReviewInput;
