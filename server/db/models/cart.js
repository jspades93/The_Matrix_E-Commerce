const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Cart
