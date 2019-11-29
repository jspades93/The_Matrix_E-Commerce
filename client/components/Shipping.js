import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addShipping} from '../store/cart'

class Shipping extends Component {
  handleChange() {}
  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChange}
              />
              <span>7-Day Shipping(+$6)</span>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChange}
              />
              <span>3-Day Shipping(+$12)</span>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChange}
              />
              <span>1-Day Shipping(+$24)</span>
            </label>
          </li>
          <li className="collection-item">
            <b>Total: ${this.props.total}</b>
          </li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  addedItems: state.addedItems,
  total: state.total
})

const mapDispatch = dispatch => ({
  addShipping: () => dispatch(addShipping)
})

export default connect(mapState, mapDispatch)(Shipping)
