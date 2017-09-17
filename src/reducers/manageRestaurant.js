
import cuid from 'cuid';
export const cuidFn = cuid;
const defaultState = { restaurants: [],
    reviews: []}

export default function manageRestaurants(state = defaultState, action) {
    switch (action.type){
        case 'ADD_RESTAURANT':
            const restaurant = { text: action.text, id: cuidFn() }

            return {...state, restaurants: [...state.restaurants, restaurant] }
        case 'DELETE_RESTAURANT':
        const restaurants = state.restaurants.filter(restaurant => (restaurant.id != action.id
        ))
            return {...state, restaurants}
        case 'ADD_REVIEW':
            const review = {...action.review, id: cuidFn()}
            return {...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review =>(
                review.id != action.id
            ))
            return {...state, reviews }
        default:
            return state
    }

}