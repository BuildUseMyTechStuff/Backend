
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('renters').insert([
        {
          RentedDrones: "DJI Mavic",
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Elite",
          RentedDrones: "DJI Mavic X",
          RentedDrones: "DJI Pro Mod",
          RentedDrones: "DJI Pro Mod X"
        }
      ]);
};
