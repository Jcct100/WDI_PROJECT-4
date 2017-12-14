const router       = require('express').Router();
const auth         = require('../controllers/auth');
const secureRoute  = require('../lib/secureRoute');
const petitions    = require('../controllers/petition');
const users        = require('../controllers/user');

router.route('/petitions')
  .get(secureRoute, petitions.index)
  .post(secureRoute, petitions.create);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show);

router.route('/petitions/:id')
  .get(petitions.show)
  .put(secureRoute, petitions.update)
  .delete(secureRoute, petitions.delete);

// router.route('/petitions/:id/sign')
//   .post(secureRoute, petitions.sign);

router.route('/petitions/:id/sign')
  .post( petitions.sign);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
