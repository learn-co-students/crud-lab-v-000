import React, { Component } from 'react';

class Restaurants extends Component {
  
  
  render() {
    
    const restaurants = this.props.store.getState().restaurants.map((item, index) => {
      return <Restaurant text={item.text} key={index} id={item.id} /* <- code change */ store={this.props.store} /> 
    });
  
    return(
      <ul>
        Restaurants Component
        { restaurants }
      </ul>
    );
  }
};

export default Restaurants;