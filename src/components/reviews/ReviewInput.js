import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleOnChange(event) {
    this.setState({text: event.target.value});
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      restaurant: this.props.restaurant,
      text: {text: this.state.text}
    });
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text} />
          <input type="submit" value='Add Review'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
