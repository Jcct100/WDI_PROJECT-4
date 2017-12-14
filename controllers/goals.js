const Goal = require('../models/goal');

function goalsIndex(req, res, next) {
  Goal
    .find()
    .exec()
    .then(goals => res.status(200).json(goals))
    .catch(next);
}

module.exports = {
  index: goalsIndex
};
