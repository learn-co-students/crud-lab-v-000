import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick() {
    console.log("Restaurant handleClick: ")
    console.log(this)
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {


    return (
      <div>
        <li>
          Name: {this.props.restaurant.text}
          <button onClick={() => this.handleOnClick()} />
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;


// class Band extends Component {
//
//   handleOnClick() {
//     console.log(this)
//     this.props.store.dispatch({
//       type: 'DELETE_BAND',
//       id: this.props.band.id,
//     });
//   }
//
//   render() {
//     return (
//       <li>
//         {this.props.band.text}
//         <button onClick={() => this.handleOnClick()} />
//       </li>
//     );
//   }
// };
