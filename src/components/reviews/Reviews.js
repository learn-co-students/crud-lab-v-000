import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    
    return (
      <ul>
        {this.props.reviews.map(rev=>{
          return (
          <Review review={rev} delete={this.props.delete}/>
          )
        })}
      </ul>
    );
  }
};

export default Reviews;