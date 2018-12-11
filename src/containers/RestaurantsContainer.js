import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}


const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)





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

