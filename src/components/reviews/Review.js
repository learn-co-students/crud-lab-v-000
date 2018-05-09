import React, { Component } from 'react';

class Review extends Component {
  handleClick=()=>{
    this.props.store.dispatch({type: 'DELETE_REVIEW', id:this.props.id})
  }
  render() {
    return(
      <div>
        <li>{this.props.text}</li>
        <button onClick={this.handleClick()}>Delete</button>
      </div>
    );
  }
};

export default Review;
