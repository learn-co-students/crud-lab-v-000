import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addText={this.props.addText} />
        <Restaurants />
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
// const mapStateToProps = ({})

const mapDispatchToProps = dispatch => ({
  addText: text => dispatch({ type: "ADD_TEXT", text }),
  // deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(null, mapDispatchToProps)(RestaurantsContainer)
// export default RestaurantsContainer