
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={ restaurants:[], reviews:[]}, action) {

  switch(action.type){
    case 'ADD_RESTAURANT':
    const res = {
      text: action.text,
      id: cuidFn()
    }
    return {restaurants: state.restaurants.concat(res), reviews: state.reviews}

    case 'DELETE_RESTAURANT':
    return {restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id)}

    case 'ADD_REVIEW':
    const rev = {
      text: action.review.text,
      restaurantId: action.review.restaurantId,
      id: cuidFn()
    }
    return {restaurants:state.restaurants, reviews: state.reviews.concat(rev)}

    case 'DELETE_REVIEW':
    return{restaurants: state.restaurants, reviews: state.reviews.filter(r=> r.id !== action.id)}

    default: return state;
  }
}
