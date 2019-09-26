

exports.seed = function(knex, Promise) {
  return knex('users-data').insert([
{
    
    email: "george.edwards@reqres.in",
    password: "gotit"
},
{
    
    email: "byron.fields@reqres.in",
    password: "word1"
},
{
    
    email: "rachel.howell@reqres.in",
    password: "homepl"
}
  ]);
}
