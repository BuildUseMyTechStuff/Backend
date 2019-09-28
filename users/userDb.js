const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = require('../database/dbConfig.js');

module.exports = {
  add,
  addByUsername,
  find,
  findByUsername,
  findResourceById,
  update,
  remove,
};

function find() {
  return db('users-data').select('full_name', 'email', 'password');
}

// function find() {
//   return db('drone-rental').select("id", "Name", "Model", "Brand", "Purpose", "Experience Level", "Cost", "Link", "Photographer");
// }

function findByUsername(id) {
  return db('users-data')
    .where({ id })
}

function findResourceById() {
  return db('drone-rental')
    // .where({ dronerental });
    
    
}

// function findByUsername(name) {
//   return db('drone-rental')
//   .where({ name })
// }

function add(email) {
  return db('users-data')
    .insert(email)
    .then(res => {
      const id = res[0];
      return findById(id);
    });
}

function addByUsername(dronerental) {
  return db('drone-rental')
    .insert(dronerental)
    // .then(res => {
    //   const name = res[0];
    //   return findById(name);
    // });
}

function findById(id) {
  return db('users-data')
  .where({ id })
}


function update(changes, id) {
  return db('users-data')
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return db('users-data')
    .where({ id: id })
    .del();
}


