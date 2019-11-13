'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Product = require('../server/db/models/product')

const products = [
  {
    name: 'Kung Fu',
    price: 29.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Professional Chef',
    price: 59.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Build A Rocketship',
    price: 99.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Dodge Bullets',
    price: 199.99,
    quantity: 10,
    imageUrl: null
  },

  {
    name: 'Run Faster',
    price: 99.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Bend Stuff With Your Mind',
    price: 299.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Coding Expert',
    price: 99.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Repel Bullets',
    price: 199.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Unlock Any Door',
    price: 199.99,
    quantity: 10,
    imageUrl: null
  },
  {
    name: 'Become The One',
    price: 999.99,
    quantity: 10,
    imageUrl: null
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
