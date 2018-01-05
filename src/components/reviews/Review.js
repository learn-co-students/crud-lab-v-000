import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleOnClick}/>
        </li>
      </div>
    );
  }
};

export default Review;
