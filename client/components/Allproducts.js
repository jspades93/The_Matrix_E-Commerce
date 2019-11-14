import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../store/products'

class Allproducts extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const {products} = this.props.products
    const productsList = products.map(p => <ul key={p.id}>{p.name}</ul>)

    return <div>{productsList}</div>
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Allproducts)
