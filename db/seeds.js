const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Petition      = require('../models/petition');

const petitionData = [{
  title: 'Scrap smart motorways and bring back permanent hard shoulders',
  image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/12DC7/production/_90155277_016785858-1.jpg',
  description: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway. If there was no hard shoulder to stop on, what happens next? The answer, after pounding the smart tarmac, is ... it isn\'t smart enough. It isn\'t quick enough to put lane restrictions/closures in place. It is in fact....a death trap! Emergency services take longer to reach an incident due to no empty lane. It doesn\'t work!',
  website: 'https://petition.parliament.uk/petitions/206799',
  // createdBy:
  number_of_signatures: 0
  // timestamps:
}, {
  title: 'Call on PM to take action to build public trust in the Grenfell Tower Inquiry',
  image: 'http://www.telegraph.co.uk/content/dam/news/2017/07/08/TELEMMGLPICT000131886332-xlarge_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStQt3tN9Ddv3cHZNIEmYP14g.jpeg',
  description: 'To secure trust in an establishment we feel has been distant & unresponsive, & to avoid a collapse of confidence in the Inquiry\'s ability to discover the truth, it is fundamental that; 1. The Inquiry is not led by a judge alone. Panel members must be appointed with relevant background, expertise, experience, & a real understanding of the issues facing those affected 2. Legal representatives of bereaved families see all evidence from the start & are allowed to question witnesses at the hearings',
  website: 'https://petition.parliament.uk/petitions/206722',
  // createdBy:
  number_of_signatures: 0
  // timestamps:
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Petition.create(petitionData))
  .then(petitions => console.log(`${petitions.length} petitions created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
