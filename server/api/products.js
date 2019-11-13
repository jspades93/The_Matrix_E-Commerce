const router = require('express').Router
const Product = require('../db/models/product')
module.exports = router

router.get('/', (res, next) => {
  Product.findAll()
    .then(product => res.json(product))
    .catch(next)
})
