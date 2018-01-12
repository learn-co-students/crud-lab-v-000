import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <textarea onChange={this.handleChange} value={this.state.text} /> <br />
          <input value='Submit Review' type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
