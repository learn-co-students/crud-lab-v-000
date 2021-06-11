import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
    state={
        text:"",
        restaurantId:""
    }
    handleChange=(ev)=>this.setState({text: ev.target.value});
    handleSubmit=(ev)=>{
        ev.preventDefault();
        this.props.addReview({...this.state,restaurantId:this.props.restaurantId});
        this.setState({
            text:"",
            restaurantId:""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    onChange={this.handleChange}
                    />
                    <input 
                    type="submit" />
                </form>
            </div>
        );
    }
};

export default ReviewInput;
