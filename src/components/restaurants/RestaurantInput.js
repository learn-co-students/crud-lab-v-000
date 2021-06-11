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
    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input type="submit" value="submit"/>
            </div>
        );
    }
};

export default RestaurantInput;
