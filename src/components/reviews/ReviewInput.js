import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  render() {
    return (
      <div>
        <form>
          <textarea /> <br />
          <input value='Submit Review' type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
