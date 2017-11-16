import React, { Component } from 'react';

export default class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state={text: ''}
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p><label>Add your restaurant</label></p>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
          </form>
      </div>
    )
  }
}

