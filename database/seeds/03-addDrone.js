
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('addDrone').insert([
        {
          Name: "DJI Phantom 4",
          Model: "Phantom 4",
          Brand: "DJI",
          Purpose: "Wedding",
          ExperienceLevel: "Expert",
          Cost: 200,
          Link: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
          Photographer: "Aditya Chinchure"
        }
      ]);
};
