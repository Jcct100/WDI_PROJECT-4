const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, { useMongoClient: true });

const Petition  = require('../models/petition');
const Goal      = require('../models/goal');
const User      = require('../models/user');

User.collection.remove();
Petition.collection.remove();
Goal.collection.remove();

let globalUsers;

User
  .create([
    {
      username: 'james',
      firstName: 'james',
      lastName: 'tang',
      email: 'james@james.com',
      password: 'password',
      passwordConfirmation: 'password',
      telephone_number: '09494842989',
      avatar: 'http://www.fillmurray.com/300/300',
      address: 'London'
    },
    {
      username: 'johndoe',
      firstName: 'john',
      lastName: 'doe',
      email: 'john@john.com',
      password: 'password',
      passwordConfirmation: 'password',
      telephone_number: '0747429821347',
      avatar: 'http://www.fillmurray.com/300/300',
      address: 'London'
    }
  ])
  .then(users => {
    globalUsers = users;
    console.log(`${users.length} users were created!`);

    return Goal.create([
      {name: 'No Poverty'},
      {name: 'Zero Hunger '},
      {name: 'Good Health and Well-being'},
      {name: 'Quality Education '},
      {name: 'Gender Equality '},
      {name: 'Clean Water and Sanitation'},
      {name: 'Affordable and Clean Energy '},
      {name: 'Decent Work and Economic Growth '},
      {name: 'Industry, Innovation and Infrastructure '},
      {name: 'Reduced Inequality '},
      {name: 'Sustainable Cities and Communities '},
      {name: 'Responsible Consumption and Production '},
      {name: 'Climate Action '},
      {name: 'Life Below Water '},
      {name: 'Life on Land '},
      {name: 'Peace and Justice Strong Institutions'},
      {name: 'Partnerships to achieve the Goal '}
    ]);
  })
  .then(goals => {
    console.log(`${goals.length} goals were created!`);

    return Petition.create([{
      title: 'Scrap smart motorways and bring back permanent hard shoulders',
      image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/12DC7/production/_90155277_016785858-1.jpg',
      abstract: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway',
      description: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway. If there was no hard shoulder to stop on, what happens next? The answer, after pounding the smart tarmac, is ... it isn\'t smart enough. It isn\'t quick enough to put lane restrictions/closures in place. It is in fact....a death trap! Emergency services take longer to reach an incident due to no empty lane. It doesn\'t work!',
      website: 'https://petition.parliament.uk/petitions/206799',
      createdBy: globalUsers[0].id,
      goals: [goals[0].id, goals[1].id],
      signees: [globalUsers[1].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,29)
    }, {
      title: 'Call on PM to take action to build public trust in the Grenfell Tower Inquiry',
      image: 'http://www.telegraph.co.uk/content/dam/news/2017/07/08/TELEMMGLPICT000131886332-xlarge_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStQt3tN9Ddv3cHZNIEmYP14g.jpeg',
      abstract: 'To secure trust in an establishment we feel has been distant & unresponsive',
      description: 'To secure trust in an establishment we feel has been distant & unresponsive, & to avoid a collapse of confidence in the Inquiry\'s ability to discover the truth, it is fundamental that; 1. The Inquiry is not led by a judge alone. Panel members must be appointed with relevant background, expertise, experience, & a real understanding of the issues facing those affected 2. Legal representatives of bereaved families see all evidence from the start & are allowed to question witnesses at the hearings',
      website: 'https://petition.parliament.uk/petitions/206722',
      createdBy: globalUsers[1].id,
      goals: [goals[4].id, goals[6].id],
      signees: [globalUsers[0].id],
      number_of_signatures: 1,
      endDate: new Date(2017,12,30)
    }]);
  })
  .then(petitions => {
    console.log(`${petitions.length} petitions were created!`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());





// Goal.create([
//   {name: 'No Poverty'},
//   {name: 'Zero Hunger '},
//   {name: 'Good Health and Well-being'},
//   {name: 'Quality Education '},
//   {name: 'Gender Equality '},
//   {name: 'Clean Water and Sanitation'},
//   {name: 'Affordable and Clean Energy '},
//   {name: 'Decent Work and Economic Growth '},
//   {name: 'Industry, Innovation and Infrastructure '},
//   {name: 'Reduced Inequality '},
//   {name: 'Sustainable Cities and Communities '},
//   {name: 'Responsible Consumption and Production '},
//   {name: 'Climate Action '},
//   {name: 'Life Below Water '},
//   {name: 'Life on Land '},
//   {name: 'Peace and Justice Strong Institutions'},
//   {name: 'Partnerships to achieve the Goal '}
// ])
// .then(goals => {
//   console.log(`${goals.length} goals created!`);
//   return Petition
//   .create([{
//     title: 'Scrap smart motorways and bring back permanent hard shoulders',
//     image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/12DC7/production/_90155277_016785858-1.jpg',
//     abstract: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway',
//     description: 'As a HGV driver, I struggled to understand completely the concept of a smart motorway. If there was no hard shoulder to stop on, what happens next? The answer, after pounding the smart tarmac, is ... it isn\'t smart enough. It isn\'t quick enough to put lane restrictions/closures in place. It is in fact....a death trap! Emergency services take longer to reach an incident due to no empty lane. It doesn\'t work!',
//     website: 'https://petition.parliament.uk/petitions/206799',
//     // createdBy: users[0].id,
//     number_of_signatures: 0,
//     endDate: new Date(2017-12-29)
//     // timestamps:
//   }, {
//     title: 'Call on PM to take action to build public trust in the Grenfell Tower Inquiry',
//     image: 'http://www.telegraph.co.uk/content/dam/news/2017/07/08/TELEMMGLPICT000131886332-xlarge_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStQt3tN9Ddv3cHZNIEmYP14g.jpeg',
//     abstract: 'To secure trust in an establishment we feel has been distant & unresponsive',
//     description: 'To secure trust in an establishment we feel has been distant & unresponsive, & to avoid a collapse of confidence in the Inquiry\'s ability to discover the truth, it is fundamental that; 1. The Inquiry is not led by a judge alone. Panel members must be appointed with relevant background, expertise, experience, & a real understanding of the issues facing those affected 2. Legal representatives of bereaved families see all evidence from the start & are allowed to question witnesses at the hearings',
//     website: 'https://petition.parliament.uk/petitions/206722',
//     // createdBy:
//     number_of_signatures: 0,
//     endDate: new Date(2017-12-30)
//     // timestamps:
//   }]);
// })
// .then(petition => {
//   console.log(`${petition.length} petitions created!`);
// })
// .catch(err => console.log(err))
// .finally(() => mongoose.connection.close());
//
// mongoose
// .connect(dbURI, { useMongoClient: true })
// .then(db => db.dropDatabase())
// //when remove dropdatabase you will not lose your data when node db/seeds? but you will get a duplicate
// // .then(() => Petition.create(petitionData))
// // .then(petitions => console.log(`${petitions.length} petitions created!`))
// .catch(err => console.log(err))
// .finally(() => mongoose.connection.close());
