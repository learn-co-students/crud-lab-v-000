import React, { Component } from 'react';

class Review extends Component {
    constructor(props) {
      super(props)

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.props.store.dispatch({
        type: 'DELETE_REVIEW',
        id: this.props.review.id
      })
    }

    render() {
      return (
        <li>
          <div>
            {this.props.review.text}
            <button onClick={this.handleClick}>Delete</button><br />
          </div>
        </li>
      );
    }
};

export default Review;
