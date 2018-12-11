import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }


   handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;




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