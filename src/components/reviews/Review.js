import React, { Component } from 'react';

class Review extends Component {
  handleClick(){
    this.props.store.dispatch({type: 'DELETE_REVIEW', id:this.props.review.id})
    console.log(this.props.id)
  }
  render() {
    return(
      <div>
        <li>
          {this.props.review.text}
          <button onClick={()=>this.handleClick()}>X</button>
        </li>
      </div>
    );
  }
};

export default Review;
