import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const assocRevs = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
    const renderRevs = () => assocRevs.map(r => <Review id ={r.id} review={r} delRev={this.props.delRev}/>)
    debugger

    return (
      <ul>
        {renderRevs()}
      </ul>
    );
  }
};

export default Reviews;
