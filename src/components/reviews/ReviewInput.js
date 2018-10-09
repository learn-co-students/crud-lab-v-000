import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleKeyDown = event => {
    this.setState({
      text: event.target.value
    })
  }



  render() {
    return (
      <div>
        <form >
          <input type="text" value={this.state.text} onChange={this.handleKeyDown}/>
          <input type="submit" value="Add Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
