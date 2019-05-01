import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super();
    this.state = {text: '', restaurantId: props.restaurant.id};
    debugger;
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addReview(this.state)
    //Reset the state
    this.setState({
      text: '',
    });
  }


  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
    );
  }
};

export default ReviewInput;
