import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}


const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)





// import React, { Component } from 'react'
// import BandInput from './BandInput';
// import Band from './Band'

// import { connect } from 'react-redux'

// class BandsContainer extends Component {

//   renderBands = () => {
//     return this.props.bands.map(band => <Band id={band.id} name={band.name} deleteBand={this.props.deleteBand} key={band.id} band={band} />)
//   }

//   render() {
//     return (
//       <div>
//         <BandInput addBand={this.props.addBand}/>
//         {this.renderBands()}
    
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name }),
//   deleteBand: id => dispatch({type: 'DELETE_BAND', id})
// })

// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

