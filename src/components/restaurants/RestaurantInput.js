import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    })
    
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)} >
          <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.text}/>
          <button>Add</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
