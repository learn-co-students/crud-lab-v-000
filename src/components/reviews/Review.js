import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.deleteReview(this.props.id)
  }

  render() {
    const { review } = this.props



    return (
      <div>
        <li>
          {this.props.text}
        </li>

        <button onClick={this.handleOnClick}>
              Delete
          </button>
      </div>
    );
  }

};

export default Review;
