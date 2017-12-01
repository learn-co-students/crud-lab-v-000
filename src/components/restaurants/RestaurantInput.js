import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text :''
    }
  }
  handleNameChange(evt){
    this.setState({
      text: evt.target.value
    })
  }
  handleSubmit(evt){
    evt.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {text: this.state.text}
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(evt)=> {this.handleSubmit(evt)}}>
          <input type="text" value={this.state.text} onChange={(evt)=>{this.handleNameChange(evt)}}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
