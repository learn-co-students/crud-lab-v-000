import React, { Component } from 'react';

class Review extends Component {
  render() {
    const btnProps = {
      className: 'btn btn-danger btn-sm',
      onClick: this.handleDelete.bind(this)
    }

    return (
      <li className='list-group-item' >
        <div className="row justify-content-between" >
          <div className="col-auto" >
            {this.props.review.text}
          </div>
          <div className="col-auto" >
            <button {...btnProps} >Delete Review</button>
          </div>
        </div>
      </li>
    )
  }

  handleDelete() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
}

export default Review;