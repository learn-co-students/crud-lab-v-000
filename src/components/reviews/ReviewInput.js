import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>Add a review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
