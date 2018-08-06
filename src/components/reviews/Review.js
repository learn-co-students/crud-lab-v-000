import React, { Component } from 'react';

class Review extends Component {

  constructor(props){
    super(props);

    this.state = {
      edit: false,
      text: this.props.review.text,
      id: this.props.review.id
    }
  }

  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.text}/>
        <input type='submit' value='Edit' />
      </form>
    )
  }

  renderReviewDetails = () => {
    return (
      <div>
        { this.props.review.text } 
        <button onClick={() => this.props.delete(this.props.review.id)}> X </button>
        {/* <button onClick={this.handleClickForUpdate}>Edit Review</button> removing for tests */}
      </div>
    )
  }

  handleClickForUpdate = () => {
    this.setState({
      edit: true
    });
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(this.state);
    this.setState({
      edit: false
    });
  }

  render() {
    return (
      <div>
        <li>
          { this.state.edit ? this.renderForm() : this.renderReviewDetails() }
        </li>
      </div>
    );
  }

};

export default Review;
