'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, required: true },
  gender: { type: String,  enum: ['male', 'female'], required: true },
  color: String,
  weight: Number
})

// const cats = [
//   {
//     id: '1',
//     name: 'Frank',
//     age: '6',
//     weight: '5',
//     owner: '1',
//     filename: 'http://placekitten.com/400/300',
//   },
//   {
//     id: '2',
//     name: 'James',
//     age: '4',
//     weight: '11',
//     owner: '2',
//     filename: 'http://placekitten.com/400/302',
//   },
// ];

schema.query.byOlderThan = function(age) {
  if (age === undefined) { return this }
  return this.where({ age: { $gte: age }})
}

schema.query.byHeavierThan = function(weight) {
  if (weight === undefined) { return this }
  return this.where({ weight: { $gte: weight } })
}

schema.query.byGender = function(gender) {
  if (gender === undefined) { return this }
  return this.where({ gender: gender})
}

module.exports = mongoose.model('Cat', schema)
