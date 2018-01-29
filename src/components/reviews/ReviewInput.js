import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text:'',
    }
  }

  handleOnChange(event){
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit(event){
    this.props.store.dispatch({
        type: 'ADD_REVIEW',
        review: {
          text: this.state.text,
          restaurantId: this.props.restaurantId,
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
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
