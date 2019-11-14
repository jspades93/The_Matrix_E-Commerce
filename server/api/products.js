const router = require('express').Router()
const Product = require('../db/models/product')
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(product => res.send(product))
    .catch(next)
})
