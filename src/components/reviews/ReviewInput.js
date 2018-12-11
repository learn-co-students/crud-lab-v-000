import React, { Component } from 'react';
import Reviews from './Reviews';



class ReviewInput extends Component {

	state = {
		text: ''
	}

	handleOnSubmit = e => {
		e.preventDefault()
		this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
		this.setState({text: ''})
	}

	handleOnChange = e => {
		this.setState({text: e.target.value})
	}

	

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;





// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// class BandInput extends Component {

//   state = {
//     bandName: '',
//   }

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     bandName: '',
//   //   };
//   // }

//   handleOnChange(event) {
//     this.setState({
//       bandName: event.target.value,
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault();
//     this.props.addBand(this.state.bandName);
//     this.setState({bandName: ''});
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.bandName}/>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// };