const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = require('../database/dbConfig.js');

module.exports = {
  add,
  addByUsername,
  addAvailableDrone,
  addRentedDrone,
  find,
  findByUsername,
  findResourceById,
  update,
  remove,
};

function find() {
  return db('users-data').select('full_name', 'email', 'password');
}


function findByUsername(id) {
  return db('users-data')
    .where({ id })
}

function findResourceById() {
  return db('drone-rental')
}

function addAvailableDrone(availabledrones) {
  return db('equipment-owners')
  .insert(availabledrones)
}

function addRentedDrone(renteddrones) {
  return db('renters')
  .insert(renteddrones)
}


function add(email) {
  return db('users-data')
    .insert(email)
    .then(res => {
      const id = res[0];
      return findById(id);
    });
}

function addByUsername(dronerental) {
  return db('addDrone')
    .insert(dronerental)
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


