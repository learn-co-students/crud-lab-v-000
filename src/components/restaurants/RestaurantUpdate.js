import React, { Component } from 'react';

class RestaurantUpdate extends Component {
  state = {
    text: this.props.restaurant.text,
    showUpdateForm: false
  };  

  onUpdateButtonClick = () => {
    this.setState({
      showUpdateForm: true,
    });
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateRestaurant(this.state.text, this.props.restaurant.id);
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
            <p>Update Restaurant</p>
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

export default RestaurantUpdate;
