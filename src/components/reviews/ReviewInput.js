import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
    constructor () {
        super();
        this.state = {
            text: '',
        }
    }
    handleOnChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.store.dispatch({
            type:'ADD_REVIEW',
            restaurant: this.props.restaurant,
            review: {text: this.state.text}
        })
        this.setState({
            text:'',
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleOnChange} />
                    <button type="submit">Add Review</button>
                </form>
            </div>
        );
    }
};

export default ReviewInput;
