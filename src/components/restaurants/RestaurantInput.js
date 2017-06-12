import React, { Component } from 'react';

class RestaurantInput extends Component {
    constructor () {
        super();
        this.state = {
            text: '',
        }
    }
    handleOnChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.store.dispatch({
            type:'ADD_RESTAURANT',
            restaurant: {text: this.state.text},
        })
        this.setState({
            text:'',
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.text} onChange={this.handleOnChange} />
            <button type="submit">Create Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
