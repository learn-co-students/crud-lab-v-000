import React, { Component } from 'react';

class ReviewInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      restaurantId: props.restaurantId
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="text">Review: </label>
            <input onChange={this.handleOnChange} type="text" name="text" value={this.state.text}/>
          </div>
          <div>
            <input type="submit" value="Post Review" />
          </div>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
