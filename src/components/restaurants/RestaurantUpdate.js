import React, {Component} from 'react';

export default class RestaurantUpdate extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.restaurant.id,
            text: this.props.restaurant.text
        }
      }

    handleChange = (event)=> {
    this.setState({text: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(this.state);
        this.props.toggleUpdate();
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <input type="submit" />
            </form>
        )
    }
}