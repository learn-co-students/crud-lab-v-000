import React, { Component } from 'react';


class Restaurant extends Component {

    handleOnClick = (e) => {
        this.props.store.dispatch({
            type: 'DELETE_RESTAURANT',
            id: this.props.restaurant.id
        });
    }

    render() {
        return (
          <div>
            <li>{this.props.restaurant.text}</li>
            <button onClick={this.handleOnClick}>Delete</button>
          </div>
        );
    }
};

export default Restaurant;
