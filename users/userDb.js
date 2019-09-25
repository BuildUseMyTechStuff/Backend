const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findByUsername,
  update,
  remove,
};

function find() {
  return db('users').select('id', 'full_name', 'email', 'password');
}

function findByUsername(full_name) {
  return db('users')
    .where({ full_name })
}

function add(user) {
  return db('users')
    .insert(user)
    .then(res => {
      const id = res[0];
      return findById(id);
    });

}

function findById(id) {
  return db('users')
  .where({ id })
}

function update(id, user) {
  return db('users')
    .where('id', Number(id))
    .update(user);
}

function remove(id) {
  return db('users')
    .where('id', Number(id))
    .del();
}


