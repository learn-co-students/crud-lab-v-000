import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this)
  // this.handleAddRevew = this.handleAddReview.bind(this)
  }
//add bind
  handleOnClick(){
    this.props.store.dispatch({
          type: 'DELETE_RESTAURANT',
          id: this.props.restaurant.id,
        });
  }

  // handleAddReview(){
  //   this.props.store.dispatch({
  //         type: 'ADD_REVIEW',
  //         id: this.props.band.id,
  //       });
  //
  // }


  render() {
    return (

      <div key={this.props.id}>
        <li>{this.props.restaurant.text}</li>
        <button onClick={this.handleOnClick}>Delete Restaurant</button>
        <ReviewInput store={this.props.store} restId={this.props.restaurant.id}/>

      </div>

    );
  }
};

export default Restaurant;
