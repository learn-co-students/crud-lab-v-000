import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  clicky = () => {
    let st = this.props.store.getState()
    console.log(st)
  }

  render() {

    // const reviews = this.props.store.getState().reviews.filter(review => review.restaurantID === this.props.restaurantID).map((review, index) => {
    //   return (<Review store={this.props.store} key={index} review={review}/>)})


    // console.log("reviews: ", reviews)
    // .getState().reviews.filter(review => review.restaurantID === this.props.restaurantID).map((review, index) => {
    //   return (<Review store={this.props.store} key={index} review={review}/>)})
  //
  //   map((restaurant, index) => {
  //   return (<Restaurant restaurant={restaurant} key={index} id={restaurant.id} store={this.props.store}/>)
  // })

    // this.props.store.getState().restaurants.

    return (
      <ul>
        Review console button: <button onClick={(event)=>this.clicky(event)} />
      </ul>
    );
  }
};

export default Reviews;
