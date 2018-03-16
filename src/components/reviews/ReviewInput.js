import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    console.log("HERE")
    console.log(this.props.store)
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      reviews: {
        text: this.state.text,
        restoId: this.props.restoId,
        id: cuid()
      },
    });
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        <Reviews
          restoId={this.props.restoId}
          store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
