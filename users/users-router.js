const router = require('express').Router();

const Users = require('./users-model.js');
const authorization = require('../middleware/authorization.js');
const usertype = require('../middleware/usertype.js');

router.get('/', authorization, usertype('admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;