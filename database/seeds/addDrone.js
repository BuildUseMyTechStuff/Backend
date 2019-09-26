
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('addDrone').insert([
        {
          Name: "DJI Phantom 4",
          Model: "Phantom 4",
          Brand: "DJI"
        }
      ]);
};
