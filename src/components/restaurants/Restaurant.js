import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
import Reviews from '../reviews/Reviews';

class Restaurant extends Component {
  render() {
    const bProps = {
      className: 'btn btn-danger btn-sm',
      onClick: e => this.handleDelete(e)
    }

    return (
      <li className="list-group-item" >
        <div className="row mb-3 justify-content-between">
          <div className="col-auto" >
            <strong>{this.props.restaurant.text}</strong>
          </div>
          <div className="col-auto" >
            <button {...bProps} >Delete</button>
          </div>
        </div>
        <ReviewInput restaurantId ={this.props.restaurant.id} store={this.props.store} />
      </li>
    )
  }

  handleDelete(event) {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }
}

export default Restaurant;