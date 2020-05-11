
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[]}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuid(),
      text: action.text
    }

    return{
      restaurants: state.restaurants.concat(restaurant)
          }


    case 'DELETE_RESTAURANT':
    return{
      restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
    }

    case 'ADD_REVIEW':

    const review = {
      id: cuid(),
      restaurantId: action.restaurantId,
      text: action.text
    }

    const restaurants = state.restaurants.map(restaurant => {
      if (restaurant.id === review.restaurantId){
        if (restaurant.reviews){
          restaurant.reviews.concat(review)
          return restaurant
        }
        else{
          restaurant.reviews = [review]
          return restaurant
        }
      }
      return restaurant
    });

    return { restaurants: restaurants }



    default:
      return state;
    }


}
