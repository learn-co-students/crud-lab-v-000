import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render(){
    return(
      <ul>
        { this.props.store.getState().restaurants.map((res, index) => {
          return <Restaurant store={this.props.store} text={res.text} id={res.id} />
        })}
      </ul>
    )
  }
}

export default Restaurants;