import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>Text: </label>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
