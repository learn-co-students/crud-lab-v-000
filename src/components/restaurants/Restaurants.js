import React, { Component } from 'react';
import {connect} from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {

  displayRestaurants = ()=>{
    return(
      <ul>
        {this.props.restaurants.map(r=>{
          return <Restaurant key={r.id} restaurant={r} deleteRestaurant={this.props.delete} />
        })}

      </ul>
    )
  }


  render() {
    return(
      <ul>
        Restaurants Component

        {this.displayRestaurants()}
      </ul>
    );
  }
};

const mapStateToProps=(state)=>{
  return{
    restaurants: state.restaurants
  }
}



export default connect(mapStateToProps)(Restaurants);
