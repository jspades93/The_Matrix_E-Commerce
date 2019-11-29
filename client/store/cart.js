//import axios from 'axios'

const GET_ALL_CART = 'GET_ALL_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const INCREASE_QUANTITY = 'INCREASE_QUANITY'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'

export const getCart = addedItems => ({type: GET_ALL_CART, addedItems})
export const addCart = item => ({type: ADD_TO_CART, item})
export const removeItem = item => ({type: REMOVE_ITEM, item})
export const increaseQuantity = item => ({type: INCREASE_QUANTITY, item})
export const decreaseQuantity = item => ({type: DECREASE_QUANTITY, item})

const initState = {
  addedItems: [],
  total: 0
}

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      return {...state, addedItems: action.addedItems}
    case ADD_TO_CART:
      let addedItem = action.item
      let duplicate = state.addedItems.find(item => addedItem.id === item.id)

      if (duplicate) {
        addedItem.quantity += 1
        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        addedItem.quantity = 1
        let newTotal = state.total + addedItem.price

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }
    case REMOVE_ITEM:
      return {
        ...state,
        addedItems: state.addedItems.filter(item => item.id !== action.item.id)
      }
    case INCREASE_QUANTITY:
      action.item.quantity += 1
      return {...state, addedItems: [...state.addedItems]}
    case DECREASE_QUANTITY:
      if (action.item.quantity < 2) {
        return {
          ...state,
          addedItems: state.addedItems.filter(
            item => item.id !== action.item.id
          )
        } //see how to call removeCart?}
      }
      action.item.quantity -= 1
      return {...state, addedItems: [...state.addedItems]}
    default:
      return state
  }
}
//>>>>>>Database wasn't working how I wanted it to so, using Redux to hold data instead<<<<<<
// export const getAllCartItems = () => async dispatch => {
//   try {
//     const {data} = await axios.get('/api/cart')
//     dispatch(getCart(data))
//   } catch (err) {
//     console.error('Error getting cart', err)
//   }
// }
// export const addToCart = (
//   name,
//   price,
//   quantity,
//   imageUrl
// ) => async dispatch => {
//   try {
//     const {data} = await axios.put('/api/cart', {
//       name,
//       price,
//       quantity,
//       imageUrl
//     })
//     dispatch(addCart(data))
//   } catch (err) {
//     console.error('Error adding to cart', err)
//   }
// }

// export const removeCartItem = id => async dispatch => {
//   try {
//     await axios.delete(`/api/cart/${id}`)
//     dispatch(removeItem(id))
//   } catch (err) {
//     console.log('Error removing Item', err)
//   }
// }
