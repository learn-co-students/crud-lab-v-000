import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor (props) {
    super();;

    this.state = {
      text: '',
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    }, ()=>{console.log("Review input text state " + this.state.text)})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      }
    })
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} type="text" onChange={this.handleOnChange}/>
          <input type="submit"></input>
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
