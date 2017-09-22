import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: '',
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      }
    })
    this.setState({
      text: '',
    });
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Restaurant</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Restaurant Name:</label>
          <input type="text" value={this.state.text}  onChange={(event => this.handleChange(event))} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
