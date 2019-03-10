import React, { Component } from 'react';
import ReviewInput from './ReviewInput'

class Review extends Component {
  state = {
    form: ""
  }

  renderUpdateForm = (review) => {
    const { restaurantId, formMethod } = this.props

    this.setState({
      form: (<ReviewInput review={review}
                          restaurantId={restaurantId}
                          formMethod={formMethod}
                          removeUpdateForm={this.removeUpdateForm} />)
    })
  }

  removeUpdateForm = () => {
    this.setState({form: ""})
  }
  
  render() {
    const { review, deleteR } = this.props

    return (
      <React.Fragment>
        <li>
          <button onClick={e => deleteR(review.id)}>&times;</button>
          {
            this.state.form !== "" ? this.state.form : (
              <React.Fragment>
                <span style={{fontSize: '23px'}}>{review.text}</span>
                <a onClick={e => this.renderUpdateForm(review)}>
                  Update
                </a>
              </React.Fragment>
            )
          }
        </li>
      </React.Fragment>
    );
  }

};

export default Review;
