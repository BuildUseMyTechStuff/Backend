

exports.seed = function(knex, Promise) {
  return knex('users-data').insert([
{
    id: 1,
    full_name: "ken",
    email: "george.edwards@reqres.in",
    password: "gotit",
    
},
{
    id: 2,
    full_name: "doug",
    email: "byron.fields@reqres.in",
    password: "word1",
    

},
{
    id: 3,
    full_name: "john",
    email: "rachel.howell@reqres.in",
    password: "homepl",
    
}
  ]);
}
