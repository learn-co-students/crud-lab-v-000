import cuid from 'cuid'
export const cuidFn = cuid

export default function restaurantReducer(state = {restaurants: []}, action){
    let idx
    switch(action.type){
        case 'ADD_RESTAURANT':
            const newRestaurant = {text: action.text, id: cuidFn()}
            console.log(state.restaurants)
            return {
                ...state,
                restaurants: [...state.restaurants, newRestaurant]
            }
        case 'DELETE_RESTAURANT':
            idx = state.restaurants.findIndex(restaurant => restaurant.id === action.id)
            return {
                ...state,
                restaurants: [...state.restaurants.slice(0, idx), ...state.restaurants.slice(idx +  1)]
            }
        default:
            return state
    }
}