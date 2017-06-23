import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const revs = this.props.store.getState().reviews.filter(i=> i.restaurantId === this.props.restaurantId)
    var reviews = revs.map((rev, index)=>{
      return <Review review={rev} store={this.props.store} key={index}/>
    })

    return(
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;