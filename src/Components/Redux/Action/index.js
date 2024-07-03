// Adding Item to the cart
export const addCart = (product) => {
 return {
  type: "ADDITEM",
  payload: product
 }
}

// Deleting Item from the cart
export const delCart = (product) => {
 return {
  type: "DELITEM",
  payload: product
 }
}