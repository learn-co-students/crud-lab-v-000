import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleChange(event)}
            type="text"
            value={this.state.text}/>

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
