import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  state = {
    text: ''
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({text: ''});
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.handleOnChange(e)}
          />
          <input
            type="submit"
            value="Add Restaurant"
          />

        </form>
      </div>
    );
  }
};

export default RestaurantInput;
