import cuid from 'cuid';
/*
export const cuidFn = cuid;
*/

export default function restaurantReducer(state = [], action) {

  switch (action.type) {

      case 'ADD_RESTAURANT':
	      return [...state, {
          id: cuid(), text: action.text
          }
        ]

 	    case 'DELETE_RESTAURANT':
	      return state.filter( restaurant => restaurant.id !== action.id );

      default:
	      return state;

   }

}
