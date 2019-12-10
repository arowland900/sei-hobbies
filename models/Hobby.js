var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hobbySchema = new Schema({
  name: {type: String, required: true},
  description: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Hobby', hobbySchema);