import React, { Component } from 'react'

export default class Restaurant extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
  
  render() {
    return (
      <li>{this.props.restaurant.text}
      <button onClick={()=>this.handleDelete()}> X </button>
      </li>
    )
  }
}