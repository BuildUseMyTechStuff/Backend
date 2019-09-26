

exports.seed = function(knex, Promise) {
  return knex('users-data').insert([
{
    full_name: "ken",
    email: "george.edwards@reqres.in",
    password: "gotit",
    
},
{
    full_name: "doug",
    email: "byron.fields@reqres.in",
    password: "word1",
    

},
{
    full_name: "john",
    email: "rachel.howell@reqres.in",
    password: "homepl",
    
}
  ]);
}
