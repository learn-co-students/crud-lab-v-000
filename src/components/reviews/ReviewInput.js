import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event){
    // console.log(this.props.store.dispatch);
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state,
      id: this.props.restaurantId,
    });
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Review: </label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        <Reviews
          store={this.props.store}
          id={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
