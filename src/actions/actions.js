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

export const removeRestaurant = id => {
    console.log("Anything", id)
    return {
    type: 'REMOVE_RESTAURANT',
    id}
}

export const updateRestaurant = restaurant => ({
    type: 'UPDATE_RESTAURANT',
    restaurant
})