import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super()

    this.state = {
      text: ''
    }
  }

  handleInput(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      }
    })
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Resturant Name</label>
        <input type='text' onChange={(e)=>this.handleInput(e)} value={this.state.text}/>
        <button type='submit'>
        Create
        </button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
