
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
    let review = Object.assign({}, action.review, { id: cuid() })

    return Object.assign({}, state, {reviews: state.reviews.concat(review)})
    case 'DELETE_REVIEW':
    const reviews = state.reviews.filter( review => review.id !== action.id )
    return {...state,
            reviews: reviews};
    default:
    return state;
}
}