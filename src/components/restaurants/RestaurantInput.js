import React, { Component } from 'react';

const e = React.createElement

class RestaurantInput extends Component {
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
      className: 'btn btn-primary btn-block text-truncate'
    }

    return (
      <form {...frmProps} >
        <div className="form-row" >
          <div className="col-10" >
            <input {...inpProps} />
          </div>
          <div className="col-2" >
            <button {...btnProps} >Create Restaurant</button>
          </div>
        </div>
      </form>
    )
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (!this.state.text) return

    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })

    this.setState({
      text: ''
    })
  }
}

export default RestaurantInput;
