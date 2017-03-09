import React, { Component } from 'react'

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    });
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return (<div>
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
        <input type="submit"/>
      </form>
    </div>
    )
  }
}

export default RestaurantInput;
