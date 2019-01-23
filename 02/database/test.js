const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId  } = Schema.Types

const TestSchema = new Schema({
  test:String
})

mongoose.model('Test',TestSchema)
