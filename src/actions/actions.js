export const addRestaurant = (restaurant) => ({
   type: "ADD_RESTAURANT",
   restaurant 
})

export const addReview = (review) => ({
    type: 'ADD_REVIEW',
    review
})

export const removeReview = id => ({
    type: 'REMOVE_REVIEW',
    id
})

export const removeRestaurant = id => ({
    type: 'REMOVE_RESTAURANT',
    id
})