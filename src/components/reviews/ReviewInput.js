import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            New review
            <br></br>
            <input type="text" onChange={this.handleInput}/>
            <br></br>
            <input type="submit"/>
          </label>
        </form>
        Reviews:
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
