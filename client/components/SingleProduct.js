import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleProduct} from '../store/products'

class SingleProduct extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId
    this.props.getProduct(productId)
  }

  render() {
    const {product} = this.props
    return (
      <div className="container">
        <img src={product.imageUrl} />
        <div>
          <h5>{product.name}</h5>
        </div>
        <div>Price: ${product.price}</div>
        <div>Quantity: {product.quantity}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.products.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getSingleProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
