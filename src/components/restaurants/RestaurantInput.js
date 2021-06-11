import React, { Component } from 'react';

class RestaurantInput extends Component {
    state={
        text:''
    }

    handleChange = (ev)=>{
        this.setState({
            text: ev.target.value
        })

    }
    handleSubmit=(ev)=>{
        ev.preventDefault();
        this.props.addRestaurant(this.state);
        this.setState({
            text:''
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="submit" 
                    />
                </form>
            </div>
        );
    }
};

export default RestaurantInput;
