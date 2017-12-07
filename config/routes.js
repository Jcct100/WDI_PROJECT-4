const router = require('express').Router();
// const auth  = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');
const petitions      = require('../controllers/petition');

router.route('/petitions')
  .get(petitions.index)
  .post(petitions.create);

router.route('/petitions/:id')
  .get(petitions.show)
  .put(petitions.update)
  .delete(petitions.delete);

// router.route('/register')
//   .post(auth.register);
//
// router.route('/login')
//   .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
