import axios from 'axios'

// 'Constants>>>>>>>>>>>'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS '

// 'Action>>>>>>>>>>>'
export const allProducts = products => ({type: GET_ALL_PRODUCTS, products})

// 'init-state>>>>>>>>>>>'
const initState = {
  products: []
}

// 'Reducer>>>>>>>>>>>'
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: action.products}
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
    console.error('Error getting all products')
  }
}
