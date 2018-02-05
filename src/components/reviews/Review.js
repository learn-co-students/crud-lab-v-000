import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this)

  }

  handleOnClick(){
    this.props.store.dispatch({
          type: 'DELETE_REVIEW',
          id: this.props.review.id,
        });



  }
  render() {
    return (
      <li>
      {this.props.review.text}
        <button onClick={this.handleOnClick}>Delete Review</button>
      </li>
    );
  }
};

export default Review;
