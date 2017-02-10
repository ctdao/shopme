const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

function comparePass(userPassword, dbPassword) {
  return bcrypt.compareSync(userPassword, dbPassword);
}

function createUser (req, res) {
  return handleErrors(req)
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    return knex('users')
    .insert({
      username: req.body.username,
      password: hash
    })
    .returning('*');
  })
  .catch((err) => {
    res.status(400).json({status: err.message});
  });
}

function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.username.length < 6) {
      reject({
        message: 'Username must be longer than 6 characters'
      });
    }
    else if (req.body.password.length < 6) {
      reject({
        message: 'Password must be longer than 6 characters'
      });
    } else {
      resolve();
    }
  });
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({status: 'Please log in'});
  return next();
}

function adminRequired(req, res, next) {
  if (!req.user) res.status(401).json({status: 'Please log in'});
  return knex('users').where({username: req.user.username}).first()
    .then((user) => {
      if (!user.admin) res.status(401).json({status: 'You are not authorized'});
      return next();
    })
    .catch((err) => {
      res.status(500).json({status: 'Something bad happened'});
    });
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  adminRequired
};
