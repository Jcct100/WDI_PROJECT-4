const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('petitions')
    .exec()
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow
};
