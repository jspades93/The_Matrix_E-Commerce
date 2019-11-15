import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../store/products'

class Allproducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const {products} = this.props.products
    const productsList = products.map(p => (
      <div key={p.id}>
        <ul className="col s4">
          <div>Product: {p.name}</div>
          <div>Price: {p.price}</div>
          <div>Qty: {p.quantity}</div>
        </ul>
      </div>
    ))

    return (
      <div className="container">
        <div className="row">
          <div className="dividers">{productsList}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Allproducts)
