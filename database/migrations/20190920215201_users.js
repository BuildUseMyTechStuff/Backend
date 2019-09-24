// exports.up = function(knex) {
//   return knex.schema.createTable('users', users => {
//     users.increments();

//     users
//       .string('username', 128)
//       .notNullable()
//       .unique();
//     users.string('password', 128).notNullable();
//   });
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTableIfExists('users');
// };

// exports.up = function(knex) 

  exports.up = function(knex) {
      return knex.schema.createTable('users', users => {
        users.increments();
    
        users
          .string('email', 255)
          .notNullable()
          .unique();
        users
          .string('first_name', 255)
          .notNullable()
          .unique();
        users
          .string('last_name', 255)
          .notNullable()
          .unique();
        users
          .string('avatar', 300)
          .notNullable()
          .unique();
      });
    };
    
    exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users');
    };