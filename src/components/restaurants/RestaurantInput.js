import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={text: ''}

  handleChange = event =>{
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRest(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default RestaurantInput;
