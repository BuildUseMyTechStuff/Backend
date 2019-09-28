
exports.up = function(knex) {
    return knex.schema.createTable('drone-rental', tbl => {
      tbl.increments()
  
      tbl
        .string('Name', 100)
        .notNullable();
      tbl
        .string('Model', 100)
        .notNullable();
      tbl
        .string('Brand', 100)
        .notNullable();
      tbl
      .string('Purpose', 300)
      .notNullable();
      tbl
      .string('ExperienceLevel')
      .notNullable();
      tbl
        .integer('Cost')
        .notNullable();
      tbl
        .string('Link', 300)
        .notNullable();
      tbl
        .string('Photographer', 200)
        .notNullable();
      })


    .createTable('equipment owners', tbl => {
      tbl.increments()
  
      tbl
        .string('available drones', 128)
        .notNullable();
      tbl
        .string('rented drones')
        .notNullable();

      })

  
    .createTable('renters', tbl => {
      tbl.increments()

      tbl
        .string('rented drones')
        .notNullable();

      })

    .createTable('addDrone', tbl => {
      tbl.increments()

      tbl
        .string('name')
        .notNullable();
      tbl
        .string('model')
        .notNullable();
      tbl
        .string('brand')
        .notNullable();
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('addDrone')
      .dropTableIfExists('renters')
      .dropTableIfExists('equipment owners')
      .dropTableIfExists('drone-rental');
  };
  