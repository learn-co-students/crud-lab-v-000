import React, { Component } from 'react';

export default class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleOnChange(e){
    this.setState({text: e.target.value});
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text
    });
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={event => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
