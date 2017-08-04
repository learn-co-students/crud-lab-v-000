import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
	debugger;
	switch (action.type) {
      case 'ADD_RESTAURANT':
        debugger
        return {restaurants: state.restaurants.push({text: action.text, id: cuid()})}
      default:
        return state
	}

}