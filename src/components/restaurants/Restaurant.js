import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';
import Reviews from '../reviews/Reviews';

class Restaurant extends Component {
    handleOnClick = () => {
        this.props.store.dispatch({
            type: 'DELETE_RESTAURANT',
            id: this.props.restaurant.id,
        })
    }
    render() {
        return (
            <li>
                {this.props.restaurant.text}
                <button onClick={this.handleOnClick} >X</button>
                <ReviewInput store={this.props.store} restaurant={this.props.restaurant} />
                <Reviews store={this.props.store} restaurant={this.props.restaurant} />
            </li>
        );
    }
};

export default Restaurant;