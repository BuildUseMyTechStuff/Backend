
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
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('drone-rental');
  };
  