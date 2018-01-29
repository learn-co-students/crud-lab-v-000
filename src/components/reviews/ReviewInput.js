import React, { Component } from 'react';
import Reviews from './Reviews';


class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text:'',
    }
  }

  handleOnChange(event){
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
