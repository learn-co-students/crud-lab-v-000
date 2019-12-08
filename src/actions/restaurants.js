export const addRestaurant = text => {
  return {
    type: 'ADD_RESTAURANT',
	text
  }; //creates a copy of the object 
};

export const deleteRestaurant = id => {
  return {
    type: 'DELETE_RESTAURANT',
    id
  };
};