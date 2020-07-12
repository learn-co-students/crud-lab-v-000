import React, { Component } from 'react';

class ReviewUpdate extends Component {
  state = {
    text: this.props.review.text,
    showUpdateForm: false
  };

  onUpdateButtonClick = () => {
    if (this.state.showUpdateForm === false) {
      this.setState({
        showUpdateForm: true
      })  
    } 
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateReview(this.state.text, this.props.review.id, this.props.review.restaurantId);
    this.setState({
      showUpdateForm: false
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.onUpdateButtonClick}>Update</button>

        {this.state.showUpdateForm ? 
          <div>
            <p>Update Review</p>
            <form onSubmit={this.handleOnSubmit}>
              <input
                type="text"
                name="text"
                onChange={this.handleOnChange}
                value={this.state.text}
              />
              <input type="submit" />
            </form>
          </div>
          :
          null
        }
      </div>
    );
  }
};

export default ReviewUpdate;