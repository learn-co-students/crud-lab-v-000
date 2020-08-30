
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {

        case 'ADD_RESTAURANT':
            console.log('Adding a restaurant to the store')

            const restaurant = { id: cuid(), text: action.payload }

            return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            console.log('deleting restaurant!')
            console.log(`id is ${action.id}`)

            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)

            return {...state, restaurants: restaurants}

        case 'ADD_REVIEW':
            console.log('adding a review to the store')
            console.log(`restaurant id is ${action.restaurantId}`)

            const review = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}

            return {...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':

        const reviews = state.reviews.filter(review => review.id !== action.id)

        return {...state, reviews: reviews}
            
        default:
            return state
    }
}
