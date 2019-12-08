export const addRestaurant = name => {
  return {
    type: 'ADD_RESTAURANT',
	name
  }; //creates a copy of the object 
};
