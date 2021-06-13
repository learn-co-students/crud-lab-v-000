import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={e=> {e.preventDefault(); this.props.addRestaurant(this.state); this.setState({text: ""})}}>
          <input type="text"
          value={this.state.text}
          onChange={e=> this.setState({text: e.target.value})}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
