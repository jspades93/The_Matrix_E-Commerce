import axios from 'axios'

// 'Constants>>>>>>>>>>>'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS '
const SINGLE_PRODUCT = 'SINGLE_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'

// 'Action>>>>>>>>>>>'
export const allProducts = products => ({type: GET_ALL_PRODUCTS, products})
export const singleProduct = product => ({type: SINGLE_PRODUCT, product})
export const addToCart = id => ({type: ADD_TO_CART, id})
// 'init-state>>>>>>>>>>>'
const initState = {
  products: [],
  selectedProduct: {},
  addedItems: [],
  total: 0
}

// 'Reducer>>>>>>>>>>>'
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
    case SINGLE_PRODUCT:
      return {...state, selectedProduct: action.product}
    case ADD_TO_CART:
      let addedItem = state.products.find(p => p.id === action.id)
      let productInCart = state.addedItems.find(p => p.id === action.id)
      if (productInCart) {
        addedItem.quantity += 1
        return {...state, total: state.total + addedItem.price}
      } else {
        addedItem.quantity = 1
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: state.total + addedItem.price
        }
      }
    default:
      return state
  }
}

// 'Thunk>>>>>>>>>>>>>>'
// export const getAllProducts = dispatch => {
//     axios.get('/api/products')
//     .then(data => dispatch(allProducts(data.data)))
//     .catch(console.error('Error getting all products'))
// }
export const getAllProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(allProducts(data))
  } catch (err) {
    console.error('Error getting all products', err)
  }
}
export const getSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(singleProduct(data))
  } catch (err) {
    console.error('Error getting single product', err)
  }
}
