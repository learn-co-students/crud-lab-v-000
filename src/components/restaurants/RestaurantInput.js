import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }


  handleSubmit = () => {

    
  }



  render() {
    return (
      <div>
        <form>
          Enter Restaurant: <input type="text" />
          <input type="submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
