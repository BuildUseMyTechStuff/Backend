
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('drone-rental').insert([
        {
          id: 1,
          Name: "DJI Phantom 4",
          Model: "Phantom 4",
          Brand: "DJI",
          Purpose: "Wedding",
          ExperienceLevel: "Expert",
          Cost: 200,
          Link: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
          Photographer: "Aditya Chinchure"
        },
        {
          id: 2,
          Name: "DJI Phantom",
          Model: "Phantom 1",
          Brand: "DJI",
          Purpose: "Try Before Buy",
          ExperienceLevel: "Intermediate",
          Cost: 125,
          Link: "https://images.unsplash.com/photo-1485849708108-3bb5576aca9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2049&q=80",
          Photographer: "Jason Blackeye"
        },
        {
          id: 3,
          Name: "DJI Phantom 3",
          Model: "Phantom 3",
          Brand: "DJI",
          Purpose: "Hiking",
          ExperienceLevel: "Intermediate",
          Cost: 150,
          Link: "https://images.unsplash.com/photo-1483988633346-c7876cae9c46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          Photographer: "Jason Blackeye"
        },
        {
          id: 4,
          Name: "DJI Mavic Pro",
          Model: "Mavic Pro",
          Brand: "DJI",
          Purpose: "Hiking",
          ExperienceLevel: "Beginner",
          Cost: 100,
          Link: "https://images.unsplash.com/photo-1521652853905-8264ec248197?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          Photographer: "Josh Sorenson"
        },
        {
          id: 5,
          Name: "DJI Phantom",
          Model: "Phantom 1",
          Brand: "DJI",
          Purpose: "Try Before Buy",
          ExperienceLevel: "Intermediate",
          Cost: 125,
          Link: "https://images.unsplash.com/photo-1557343569-b1d5b655b7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          Photographer: "Andreas Dress"
        },
        {
          id: 6,
          Name: "QuadDrone",
          Model: "QuadDrone",
          Brand: "Yuneec",
          Purpose: "Wedding",
          ExperienceLevel: "Expert",
          Cost: 175,
          Link: "https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1982&q=80",
          Photographer: "NeONBRAND"
        },       
      ]);
};
