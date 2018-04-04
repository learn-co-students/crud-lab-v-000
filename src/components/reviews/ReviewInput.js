import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.props)
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      },
    })
    this.setState({
      text: '',
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <label>Review: </label>
          <input
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
        <Reviews 
          store={this.props.store} 
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
};

export default ReviewInput;
