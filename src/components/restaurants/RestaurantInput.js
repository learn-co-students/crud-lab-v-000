import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()

    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      text: this.state.text
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
