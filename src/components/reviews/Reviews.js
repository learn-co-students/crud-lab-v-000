import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  displayReviews = ()=>{
    if(this.props.allReviews){
    return this.props.allReviews.map(r=>{
      return <Review key={r.id} review={r} deleteReview={this.props.deleteReview}/>
    })
  }
}

  render() {
    return (
      <ul>
        {this.displayReviews()}
        Reviews
      </ul>
    );
  }
};

export default Reviews;
