import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  render() {
    const frmProps = {
      onSubmit: e => this.handleSubmit(e)
    }

    const inpProps = {
      type: 'text',
      className: 'form-control',
      value: this.state.text,
      onChange: e => this.handleChange(e),
    }

    const btnProps = {
      type: 'submit',
      className: 'btn btn-primary btn-block'
    }

    return (
      <div>
      <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      <form {...frmProps} >
        <div className="form-row" >
          <div className="col-10" >
            <input {...inpProps} />
          </div>
          <div className="col-2" >
            <button {...btnProps} >Submit Review</button>
          </div>
        </div>
      </form>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })

    this.setState({
      text: ''
    })
  }
}

export default ReviewInput;
