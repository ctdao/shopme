const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('test234', salt);
    return Promise.join(
      knex('users').insert({
        username: 'test234',
        password: hash
      })
    );
  });
};
