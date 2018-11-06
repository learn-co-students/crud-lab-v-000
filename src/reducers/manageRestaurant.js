
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const restaurant = { id: cuidFn(), text: action.text };
      console.log (...state.restaurants, restaurant)
      return { 
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }
      // creates this array: [{id: "cjo5...", text: "Mcdonalds"}, {id: "cjo4...", text: "Chikfila"}]

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      //debugger;
      console.log(restaurants);
      return { ...state, restaurants}

    case 'ADD_REVIEW':
      const review = { id: cuidFn(), restaurantId: action.review.restaurantId, text: action.review.text  };
      console.log({ ...state, reviews: [...state.reviews, review]})
      return { ...state, 
              reviews: [...state.reviews, review]
      }
    case 'DELETE_REVIEW':
    console.log(action.id)
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }
   

    default:
      return state;

  }

}

