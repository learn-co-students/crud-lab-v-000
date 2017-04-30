import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          Review This Restaurant! <br />
          <input onChange={(event) => this.handleChange(event)} value={this.state.text} /> <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
