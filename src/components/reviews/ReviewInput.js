import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({text: ''})
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
