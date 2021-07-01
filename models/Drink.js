// require mongoose package
const mongoose = require('mongoose')

// define a mongoose schema
const DrinkSchema = new mongoose.Schema({
    name: {
        type: String
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true
})

// build a model from schema OR export the schema

module.exports = DrinkSchema