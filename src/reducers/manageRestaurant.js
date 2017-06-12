
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
state = { restaurants: [],
         reviews: [] },
 action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {...state,
                    restaurants: state.restaurants.concat({
                ...action.restaurant,
                id: cuid(),
            }
                )};
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id )
            return {...state,
                    restaurants: restaurants};
        case 'ADD_REVIEW':
            let review = action.review
            return Object.assign({}, state, {reviews: state.reviews.concat(review)})
        case 'DELETE_REVIEW':
            return state;
        default:
            return state;
    }
}