import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRest = () =>{
    return this.props.rests.map(r => <Restaurant id ={r.id} restaurant={r} delRest={this.props.delRest}/>)
  }

  render() {
    // debugger
    return(
      <ul>
        Restaurants Component
        {this.renderRest()}
      </ul>
    );
  }
};

export default Restaurants;
