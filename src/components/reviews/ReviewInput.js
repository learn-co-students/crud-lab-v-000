import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

    constructor(props) {
      super(props);

      this.state = {
        text: '',
      };
      
    }

    handleChange(event){
      this.setState({
        text: event.target.value,
      });
    }

    handleOnSubmit(event) {
      event.preventDefault();
      this.props.store.dispatch({
        type: 'ADD_REVIEW',
        review: {
          text: this.state.text,
          restId: this.props.restId
        },
      });
      this.setState({
        text: '',
      });

    }

    render() {
      return (
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type="text" onChange={(event) => this.handleChange(event)}>
            </input>
            <input type="submit" />
          </form>
          <Reviews store={this.props.store} restId={this.props.restId} />
        </div>
      );
    }
  };




export default ReviewInput;
