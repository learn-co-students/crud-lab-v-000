import React, { Component } from 'react';

class ReviewEdit extends Component {

    state = {
        text: this.props.review.text
    }

    handleEditChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }
    
    handleEditSubmit = (event) => {
        event.preventDefault();
        this.props.review.text = this.state.text
        this.props.updateReview(this.props.review);
        this.props.toggleEdit()
        this.setState({
          text: ''
        })
    }
    
    render() {
        return (
          <form onSubmit={this.handleEditSubmit}>
            <h3>Edit Review</h3>
            <input 
              type="text"
              value={this.state.text}
              onChange={this.handleEditChange}></input>
            <input type="submit"></input>
          </form>
        );
    }
}

export default ReviewEdit;