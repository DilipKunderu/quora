// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var answerSchema = new Schema({
  id: {type : Number},
  answer : {type: String},
  e_id : {type: String},
  user_id: { type: String},
  votes: {type: Number},
  is_anonymous : {type: Boolean},
  // category_id: {type : Number},
  created_on: {type: Date},
  updated_on: {type: Date, default: Date.now}
});

// the schema is useless so far
// we need to create a model using it
var answer = mongoose.model('answer', answerSchema);

// make this available to our users in our Node applications
module.exports = answer;