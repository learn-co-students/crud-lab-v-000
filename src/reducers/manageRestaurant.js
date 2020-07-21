
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
  }, action) {
    //console.log(action)
    switch (action.type) {
    
        case 'ADD_RESTAURANT':
            const newRestaurant = { text: action.payload, id: cuidFn() };
            //console.log(newRestaurant)
            return {
                ...state,
                restaurants:[...state.restaurants, newRestaurant]
            }


            case 'DELETE_RESTAURANT':
                const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload);
            return {
                ...state,
                restaurants
            }

            case 'ADD_REVIEW':
                //why couldnt I call it payload
                const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
                return { ...state,
                    reviews: [...state.reviews, review]
                }

                case 'DELETE_REVIEW':
                    const reviews = state.reviews.filter(review => review.id !== action.id);
                    return {...state, reviews }
              
            

        default:
            return state;




    }


}
