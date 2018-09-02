import React, { Component } from 'react';

class Review extends Component {

  render() {

    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button onClick={() => this.props.delete(this.props.id)}> X </button>
      </div>
    );
  }

};

export default Review;
