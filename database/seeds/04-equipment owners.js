
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('equipment owners').insert([
        {
          AvailableDrones: "DJI Phantom 4",
          AvailableDrones: "DJI Phantom 3",
          AvailableDrones: "DJI Phantom 5",
          AvailableDrones: "DJI Phantom 6",
          AvailableDrones: "DJI Phantom 8",
          AvailableDrones: "DJI Phantom 1",
          AvailableDrones: "DJI Phantom 2",
        },

        {
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Pro",
          RentedDrones: "DJI Mavic Pro",
        },
        
      ]);
};
