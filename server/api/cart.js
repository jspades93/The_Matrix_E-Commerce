const router = require('express').Router()
const Cart = require('../db/models/cart')
module.exports = router

router.get('/', (req, res, next) => {
  Cart.findAll()
    .then(items => res.send(items))
    .catch(next)
})

router.delete('/:cartId', (req, res, next) => {
  Cart.findOne({
    where: {id: req.params.cartId}
  })
    .then(item => {
      item.destroy()
      res.send(item)
    })
    .catch(next)
})
