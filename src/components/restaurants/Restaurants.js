import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  //Trying to pass delete function through props here...
  constructor(props){
    super(props)
    this.myDelete=props.delete
  }
  
  
  render() {
    return(
      <ul>
        {this.props.restaurants.map(res => {
          return(
            <Restaurant restaurant={res} delete={this.myDelete}/>
          )
        })}
      </ul>
    );
  }
};

export default Restaurants;