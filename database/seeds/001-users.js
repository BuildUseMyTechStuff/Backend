exports.seed = function(knex, Promise) {
  return knex('users').insert([
{   
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg", // 1
  }
          ]);
};
