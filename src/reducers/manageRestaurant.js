
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [] },
  action
) {
  switch(action.type) {
    case 'CREATE_RESTAURANT':
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { text: action.text, id: cuid() }
        ]
      };

    default: return state;
  }
}
