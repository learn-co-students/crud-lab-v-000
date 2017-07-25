
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const r = Object.assign([], {text: action.restaurant.text, id: cuid(), reviews: []});
            let rest = state.restaurants;
            rest.push(r);
            return { restaurants: rest };
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return  { restaurants }
        case 'ADD_REVIEW':
            //const rev = Object.assign([], {text: action.review.text});
            let restaurant = state.restaurants.find((r) => r.id === action.restaurantId);
            let restaurantIndex = state.restaurants.findIndex((r) => r === restaurant);
            //console.log("Restaurant Index is " + restaurantIndex)
            //let reviews = restaurant.reviews
            restaurant.reviews.push(action.review);
            console.log("Review is  " + restaurant.reviews[0].text)
            return { restaurants: state.restaurants.slice(0,restaurantIndex).concat(restaurant).concat(restaurantIndex+1, -1) };
        default:
            return state;
    }
}