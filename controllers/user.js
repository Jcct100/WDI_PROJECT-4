const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

module.exports = {
  index: usersIndex
};
