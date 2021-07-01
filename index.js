const express = require('express')
// require the database
const db = require('./models')
// connect to it
db.connect()

// config our express app
const app = express()
const PORT = 3000
// request body middleware
app.use(express.urlencoded({ extended: false }))

// test index route / -- return a server message
app.get('/', (req, res) => {
  res.json({ msg: 'hello! welcome to the drinks API 🍻' })
})

// GET /drinks -- READ all drinks from the db
app.get('/drinks', async (req, res) => {
  try {
    const drinks = await db.Drink.find({})
    res.json({ drinks })
  } catch(err) {
    console.log(err)
  }
})

// POST /drinks -- CREATE one drink redirect to /drinks
app.post('/drinks', (req, res) => {
  db.Drink.create({
    name: req.body.name,
    rating: req.body.rating
  })
  .then(() => {
    res.redirect('/drinks')
  })
  .catch(err => console.log(err))
})

// PUT /drinks/:id -- UPDATE one drink and redirect to /drinks
app.put('/drinks/:id', (req, res) => {
  db.Drink.findById(req.params.id)
    .then(foundDrink => {
      foundDrink.name = req.body.name
      foundDrink.rating = req.body.rating

      foundDrink.save()
        .then(() => {
          res.redirect('/drinks')
        })
    })
})
// DELETE /drinks/:id -- DESTROY onde drink and redirect to /drinks
app.delete('/drinks', (req, res) => {
    db.Drink.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
        console.log(deletedItem)
        res.redirect('/drinks')
    })
})



app.listen(PORT, () => console.log(`welocome to port ${PORT}! 👋`))