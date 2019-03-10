import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = { text: "" }
  baseState = this.state

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.formMethod({ ...this.props.restaurant, ...this.state })
    this.setState(this.baseState)
    if (this.props.removeUpdateForm) {this.props.removeUpdateForm()}
  }
  
  componentDidMount() {
    if (this.props.restaurant) {
      this.setState({text: this.props.restaurant.text})
    }
  }

  render() {
    return (
      <React.Fragment>
        <form style={{display:'inline-block'}} onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Name"
                 value={this.state.text}
                 onChange={this.handleChange} />
          <input type="submit"
                 value={this.props.restaurant ? "Update" : "Create"} />
        </form>
      </React.Fragment>
    );
  }
};

export default RestaurantInput;
