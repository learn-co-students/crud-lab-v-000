import React from 'react';


export default class Review extends React.Component {

  state = {}

  toggleEdit = () => {
      this.setState({
        text: this.props.review.text,
        isEditing: !this.state.isEditing })
    }

  handleChange = (event) => {
      this.setState({
     text: event.target.value
   })
 }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.updateReview({id: this.props.review.id, text: this.state.text, restaurantId: this.props.review.restaurantId})
      this.setState({ isEditing: false })
    }

  render() {
    const {deleteReview, review} = this.props;
      return (
        <div>
          {
            this.state.isEditing &&
            <form onSubmit={this.handleSubmit}>
            <label>Edit Review: </label>
              <input
                    type="text"
                    placeholder={review.text}
                    onChange={this.handleChange}
                    value={this.state.text}>
              </input> <br />
              <input type="submit"></input>
              <button onClick={this.toggleEdit}>Cancel</button>
            </form>
          }

          {
            !this.state.isEditing &&
            <li>
              {review.text}
              <button onClick={this.toggleEdit}>EDIT</button>
              <button onClick={() => deleteReview(review.id)}> Delete </button>

            </li>
          }
        </div>
       )
    }

}
