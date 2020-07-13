
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: []
}, action) {
    switch (action.type) {

        case 'ADD_RESTAURANT':
            console.log('Adding a restaurant to the store')

            const restaurant = { id: cuid(), text: action.payload }

            return {...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            console.log('deleting restaurant!')
            console.log(`id is ${action.payload}`)

            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload)

            return {...state, restaurants: restaurants}

        default:
            return state
    }
}
