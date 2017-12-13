const mongoose = require('mongoose');

const petitionSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  abstract: { type: String, required: true },
  description: { type: String, required: true },
  website: { type: String, required: true },
  signees: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'  },
  endDate: { type: Date, required: true }
  // endDate: { type: Date }
}, {
  timestamps: true
});

petitionSchema
  .virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'createdBy'
  });

module.exports = mongoose.model('Petition', petitionSchema);

//http://mongoosejs.com/docs/guide.html#timestamps
