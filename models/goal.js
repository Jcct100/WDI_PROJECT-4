const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
  name: [{type: String }]
  // endDate: { type: Date }
}, {
  timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);
