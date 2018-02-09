import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    debugger;
    event.preventDefault();

  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input value={this.state.text} onChange={(event) => this.handleChange(event)} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
