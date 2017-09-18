import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {store} = this.props
    const reviews = store.getState().reviews.filter((r)=>r.restaurantId===this.props.restaurantId).map((review,index)=>{
      return <Review store={store} key={index} review={review}/>
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;