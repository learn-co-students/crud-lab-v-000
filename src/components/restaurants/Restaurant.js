import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.deleteName(this.props.restaurant.id)}> X </button><br/>
          Review: 
          <ReviewsContainer restaurant={this.props.restaurant} />
          {/* {console.log(this.props)} */}
        </li>
      </div>
    );
  }
};

export default Restaurant;
