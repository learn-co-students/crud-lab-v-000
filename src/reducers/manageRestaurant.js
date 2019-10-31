import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
      switch(action.type){
          case 'ADD_RESTAURANT':
            return [...state, {text: action.text, id: cuid()}];

        case 'DELETE_RESTAURANT':
            return state.restaurants.filter(restaurant => restaurant.id !== action.id)

          default:
              return state;
      }
    }
