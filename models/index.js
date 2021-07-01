// require Mongoose package
const mongoose = require('mongoose')
require('dotenv').config()

// define atlas uri
const uri = process.env.ATLAS_URI

// connect mongoose to atlas v5 connection methods
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection

db.once('open', () => {
    console.log(`You have connected! 👍 ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.log(`🔥 oh no the datacenter burned down ${err}`)
})

// export a function that connects this for me

