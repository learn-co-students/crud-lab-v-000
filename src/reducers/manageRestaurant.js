
import cuid from 'cuid';
export const cuidFn = cuid;
let init = {
    restaurants: [],
    reviews: []
}
export default function manageRestaurants(state = init, action) {

    switch(action.type){
        case 'ADD_RESTAURANT':

            let restaurant = {
                id: cuidFn(),
                text: action.text
            }

            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            let restaurants = state.restaurants.filter((restaurant) =>{
                return restaurant.id != action.id
            })

            return {...state, restaurants: restaurants}
        case 'ADD_REVIEW':
            let review = {
                id: cuidFn(), 
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            let reviews = state.reviews.filter(review => review.id != action.id)
            return {...state, reviews: reviews}


        default: return state;
    }
}
