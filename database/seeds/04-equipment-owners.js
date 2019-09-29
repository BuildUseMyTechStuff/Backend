
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('equipment-owners').insert([
        {
          AvailableDrones: "DJI Phantom 1",
          AvailableDrones: "DJI Phantom 2",
          AvailableDrones: "DJI Phantom Three",
          AvailableDrones: "DJI Phantom 5",
          AvailableDrones: "DJI Phantom 6",
          AvailableDrones: "DJI Phantom Seven",
        }
    ]);
};
