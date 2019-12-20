import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={e => this.setState({ text: e.target.value})}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
